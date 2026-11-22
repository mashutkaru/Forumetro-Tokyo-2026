// Visitor's own location, drawn inside the current city model.
// Coordinates stay in this page. Nothing here is sent, stored, or written
// into the address bar, storage, cookies, or analytics.
// The pulsing dot is updated from the viewer's existing render loop (tick).
// This file does not start its own animation loop.

import { MODEL_GEO, isCalibrated, markerReady, classifyCoverage, isInsideCoverage, nearestPerimeter, wgs84ToWorld } from "./model-geo.js?v=3";

const GEO_OPTIONS = Object.freeze({
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 5000,
});

const STALE_MS = 20000;
const DOT_METERS = 12;
const MARKER_RED = "#d3122a";

const BUTTON_COPY = {
  show: {
    en: "Show my location",
    ja: "現在地を表示",
    he: "הצג את המיקום שלי",
  },
  hide: {
    en: "Hide my location",
    ja: "現在地を隠す",
    he: "הסתר את המיקום שלי",
  },
};

const STATUS_COPY = {
  locating: {
    en: "Finding your location…",
    ja: "現在地を探しています…",
    he: "מחפש את המיקום שלך…",
  },
  inside: {
    en: "You are inside the modeled area",
    ja: "モデルの対象エリア内にいます",
    he: "המיקום שלך נמצא בתוך אזור המודל",
  },
  outside: {
    en: "You are {d} from this model",
    ja: "このモデルの範囲まで{d}",
    he: "המרחק שלך מגבול המודל הוא {d}",
  },
  edge: {
    en: "Near the model boundary — GPS accuracy is limited",
    ja: "モデルの境界付近です — GPSの精度に制限があります",
    he: "בקרבת גבול המודל — דיוק המיקום מוגבל",
  },
  uncalibrated: {
    en: "Location is not calibrated for this area yet.",
    ja: "このエリアの現在地はまだ調整されていません。",
    he: "המיקום עדיין לא מכויל לאזור הזה.",
  },
  denied: {
    en: "Location is blocked. Allow location access for this site in your browser settings, then tap Show my location again.",
    ja: "位置情報が拒否されています。ブラウザの設定でこのサイトの位置情報を許可してから、「現在地を表示」をもう一度押してください。",
    he: "הגישה למיקום חסומה. אפשרו מיקום לאתר זה בהגדרות הדפדפן, ואז לחצו שוב על הצג את המיקום שלי.",
  },
  unavailable: {
    en: "Your position is unavailable or took too long. Try again outdoors, or tap Show my location.",
    ja: "現在地を取得できないか、時間がかかりすぎました。屋外で試すか、「現在地を表示」をもう一度押してください。",
    he: "המיקום לא זמין, או שהאיתור ארך יותר מדי. נסו בחוץ, או לחצו שוב על הצג את המיקום שלי.",
  },
  stale: {
    en: "Last location update was {n} seconds ago.",
    ja: "前回の現在地更新は{n}秒前です。",
    he: "עדכון המיקום האחרון היה לפני {n} שניות.",
  },
  unsupported: {
    en: "This browser cannot share your location.",
    ja: "このブラウザでは現在地を使えません。",
    he: "הדפדפן הזה לא יכול לשתף את המיקום.",
  },
};

function pageLang() {
  const lang = document.documentElement.lang;
  if (lang === "ja" || lang === "he") return lang;
  return "en";
}

function fill(text, vars) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, key) => (vars[key] == null ? match : String(vars[key])));
}

function formatDistance(meters, lang) {
  const value = Math.max(0, meters);
  if (value >= 1000) {
    const km = (Math.round(value / 100) / 10).toFixed(1);
    if (lang === "he") return km + " ק״מ";
    return km + " km";
  }
  const whole = String(Math.round(value));
  if (lang === "he") return whole + " מ׳";
  return whole + " m";
}

export function createSelfLocation({
  THREE,
  scene,
  button,
  label,
  statusEl,
  distanceEl,
  requestRender,
  getModelRoot,
  boundsOf,
}) {
  const raycaster = new THREE.Raycaster();
  const origin = new THREE.Vector3();
  const down = new THREE.Vector3(0, -1, 0);
  const warned = new Set();

  let currentKey = null;
  let currentEntry = null;
  let currentNorth = null;
  let tracking = false;
  let session = 0;
  let watchId = null;
  let lastFix = null;
  let shownAge = -1;
  let group = null;
  let dot = null;
  let ring = null;
  let dotBase = 1;
  let dimmed = false;

  function paint(el, pack, vars) {
    el.dataset.en = fill(pack.en, vars);
    el.dataset.ja = fill(pack.ja, vars);
    el.dataset.he = fill(pack.he, vars);
    el.textContent = el.dataset[pageLang()] || el.dataset.en;
  }

  function setButtonMode(mode) {
    paint(label, BUTTON_COPY[mode]);
    button.setAttribute("aria-pressed", mode === "hide" ? "true" : "false");
  }

  function setStatus(key, vars) {
    const pack = STATUS_COPY[key];
    if (!pack) return;
    statusEl.dataset.state = key;
    paint(statusEl, pack, vars);
    statusEl.hidden = false;
  }

  function hideStatus() {
    statusEl.hidden = true;
    statusEl.textContent = "";
    delete statusEl.dataset.en;
    delete statusEl.dataset.ja;
    delete statusEl.dataset.he;
    delete statusEl.dataset.state;
  }

  function hideDistance() {
    if (!distanceEl) return;
    distanceEl.hidden = true;
    distanceEl.textContent = "";
    delete distanceEl.dataset.en;
    delete distanceEl.dataset.ja;
    delete distanceEl.dataset.he;
  }

  function setDistance(meters) {
    if (!distanceEl) return;
    paint(distanceEl, STATUS_COPY.outside, {
      d: formatDistance(meters, "en"),
    });
    distanceEl.dataset.ja = fill(STATUS_COPY.outside.ja, { d: formatDistance(meters, "ja") });
    distanceEl.dataset.he = fill(STATUS_COPY.outside.he, { d: formatDistance(meters, "he") });
    distanceEl.dataset.en = fill(STATUS_COPY.outside.en, { d: formatDistance(meters, "en") });
    distanceEl.textContent = distanceEl.dataset[pageLang()] || distanceEl.dataset.en;
    distanceEl.hidden = false;
  }

  function disposeMaterial(material) {
    if (!material) return;
    if (material.map) material.map.dispose();
    material.dispose();
  }

  function dropMarker() {
    if (!group) return;
    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      const materials = obj.material
        ? (Array.isArray(obj.material) ? obj.material : [obj.material])
        : [];
      materials.forEach(disposeMaterial);
    });
    group = null;
    dot = null;
    ring = null;
    dimmed = false;
  }

  function ensureMarker() {
    if (group) return;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 128, 128);
    ctx.beginPath();
    ctx.arc(64, 64, 40, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(64, 64, 26, 0, Math.PI * 2);
    ctx.fillStyle = MARKER_RED;
    ctx.fill();
    const texture = new THREE.CanvasTexture(canvas);
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    dot = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    }));
    dot.center.set(0.5, 0.5);
    dot.renderOrder = 10000;

    ring = new THREE.Mesh(
      new THREE.RingGeometry(0.82, 1, 64),
      new THREE.MeshBasicMaterial({
        color: 0xd3122a,
        transparent: true,
        opacity: 0.4,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.renderOrder = 9990;

    group = new THREE.Group();
    group.name = "self-location";
    group.add(ring);
    group.add(dot);
    group.traverse((obj) => {
      obj.raycast = () => {};
      obj.frustumCulled = false;
    });
    scene.add(group);
  }

  function groundY(x, z) {
    const root = getModelRoot();
    if (!root) return null;
    const box = boundsOf(root);
    if (!box || box.isEmpty()) return null;
    const span = Math.max(box.max.y - box.min.y, 1);
    origin.set(x, box.max.y + span + 10, z);
    raycaster.set(origin, down);
    raycaster.far = origin.y - box.min.y + span + 20;
    const hits = raycaster.intersectObject(root, true);
    let y = null;
    for (let i = 0; i < hits.length; i++) {
      const hy = hits[i].point.y;
      if (Number.isFinite(hy) && (y === null || hy < y)) y = hy;
    }
    if (y === null) y = box.min.y;
    return y;
  }

  function undim() {
    dimmed = false;
    if (!dot) return;
    dot.material.opacity = 1;
    ring.material.opacity = 0.4;
  }

  function dimMarker() {
    if (!dot) return;
    dimmed = true;
    dot.material.opacity = 0.35;
    ring.material.opacity = 0.15;
  }

  function place(world, accuracyM, metersPerUnit, dimmedMark) {
    const y = groundY(world.x, world.z);
    if (y == null) return false;
    ensureMarker();
    const lift = 0.4 / metersPerUnit;
    group.position.set(world.x, y + lift, world.z);
    const radius = typeof accuracyM === "number" && Number.isFinite(accuracyM) && accuracyM > 0
      ? accuracyM / metersPerUnit
      : 0;
    ring.visible = radius > 0;
    if (radius > 0) ring.scale.set(radius, radius, radius);
    dotBase = DOT_METERS / metersPerUnit;
    dot.position.set(0, DOT_METERS * 0.5 / metersPerUnit, 0);
    if (dimmedMark) dimMarker();
    else undim();
    return true;
  }

  function showModelState() {
    const ready = markerReady(currentEntry, currentNorth);
    if (currentKey && isCalibrated(currentEntry) && !ready && !warned.has(currentKey)) {
      warned.add(currentKey);
      console.warn(
        "Forumetro: location stays off for " + currentKey
        + " until northDegrees matches VERIFIED_NORTH (" + currentNorth
        + "). That rotation is applied once, inside the coordinate conversion."
      );
    }
    button.disabled = !ready;
    button.setAttribute("aria-disabled", ready ? "false" : "true");
    setButtonMode("show");
    hideDistance();
    if (ready) hideStatus();
    else setStatus("uncalibrated");
  }

  function stopTracking() {
    session += 1;
    tracking = false;
    lastFix = null;
    shownAge = -1;
    if (watchId != null && navigator.geolocation && typeof navigator.geolocation.clearWatch === "function") {
      navigator.geolocation.clearWatch(watchId);
    }
    watchId = null;
    document.removeEventListener("visibilitychange", onVisible);
    dropMarker();
    hideDistance();
    setButtonMode("show");
    requestRender();
  }

  function onVisible() {
    if (document.visibilityState !== "visible" || !tracking) return;
    if (!navigator.geolocation || typeof navigator.geolocation.getCurrentPosition !== "function") return;
    const token = session;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (token === session) onFix(position);
      },
      (error) => {
        if (token === session) onError(error);
      },
      GEO_OPTIONS
    );
  }

  function applyFix() {
    if (!tracking || !lastFix) return;
    if (!markerReady(currentEntry, currentNorth)) {
      dropMarker();
      hideDistance();
      setStatus("uncalibrated");
      requestRender();
      return;
    }
    const kind = classifyCoverage(currentEntry, lastFix.lat, lastFix.lon, lastFix.accuracy);
    const nearest = nearestPerimeter(currentEntry, lastFix.lat, lastFix.lon);
    const metersPerUnit = currentEntry.metersPerUnit;
    hideDistance();
    if (kind === "outside") {
      const world = nearest && wgs84ToWorld(currentEntry, nearest.lat, nearest.lon);
      if (!world || !place(world, 0, metersPerUnit, false)) {
        dropMarker();
        setStatus("locating");
        return;
      }
      hideStatus();
      setDistance(nearest.distanceM);
      requestRender();
      return;
    }
    if (kind === "edge") {
      const rawInside = isInsideCoverage(currentEntry, lastFix.lat, lastFix.lon);
      const target = rawInside || !nearest
        ? { lat: lastFix.lat, lon: lastFix.lon }
        : nearest;
      const world = wgs84ToWorld(currentEntry, target.lat, target.lon);
      const ringMeters = rawInside ? lastFix.accuracy : 0;
      if (!world || !place(world, ringMeters, metersPerUnit, true)) {
        dropMarker();
        setStatus("edge");
        requestRender();
        return;
      }
      setStatus("edge");
      requestRender();
      return;
    }
    const world = wgs84ToWorld(currentEntry, lastFix.lat, lastFix.lon);
    if (!world || !place(world, lastFix.accuracy, metersPerUnit, false)) {
      dropMarker();
      setStatus("locating");
      return;
    }
    setStatus("inside");
    requestRender();
  }

  function onFix(position) {
    const coords = position && position.coords;
    if (!coords || !Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) {
      if (!lastFix) setStatus("unavailable");
      return;
    }
    lastFix = {
      lat: coords.latitude,
      lon: coords.longitude,
      accuracy: coords.accuracy,
      time: Date.now(),
    };
    shownAge = -1;
    applyFix();
  }

  function onError(error) {
    const code = error && error.code;
    if (code === 1) {
      stopTracking();
      setStatus("denied");
      return;
    }
    if (!lastFix) setStatus("unavailable");
  }

  function onClick() {
    if (button.disabled) return;
    if (tracking) {
      stopTracking();
      showModelState();
      return;
    }
    if (!navigator.geolocation || typeof navigator.geolocation.watchPosition !== "function") {
      setStatus("unsupported");
      return;
    }
    // Called directly from the tap. iOS Safari only allows geolocation
    // from a user gesture, so this must not wait on a timer or a promise.
    tracking = true;
    session += 1;
    const token = session;
    setButtonMode("hide");
    setStatus("locating");
    document.addEventListener("visibilitychange", onVisible);
    try {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          if (token === session) onFix(position);
        },
        (error) => {
          if (token === session) onError(error);
        },
        GEO_OPTIONS
      );
    } catch (e) {
      if (token === session) onError({ code: 2 });
    }
  }

  button.addEventListener("click", onClick);

  function tick() {
    if (dot && dotBase > 0) {
      const pulse = 1 + 0.16 * Math.sin(performance.now() * 0.005);
      const size = dotBase * pulse;
      dot.scale.set(size, size, 1);
    }
    if (!tracking || !lastFix) return;
    const ageMs = Date.now() - lastFix.time;
    if (ageMs < STALE_MS) return;
    if (dot) dimMarker();
    const seconds = Math.floor(ageMs / 1000);
    if (seconds === shownAge) return;
    shownAge = seconds;
    setStatus("stale", { n: String(seconds) });
  }

  return {
    bindModel(key, verifiedNorth) {
      stopTracking();
      currentKey = key || null;
      currentEntry = key && Object.prototype.hasOwnProperty.call(MODEL_GEO, key) ? MODEL_GEO[key] : null;
      currentNorth = typeof verifiedNorth === "number" && Number.isFinite(verifiedNorth) ? verifiedNorth : null;
      showModelState();
    },
    dropMarker,
    reapply() {
      if (tracking && lastFix) applyFix();
    },
    noteFailed() {
      stopTracking();
      hideStatus();
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
    },
    deactivate() {
      stopTracking();
      hideStatus();
    },
    resumeIdle() {
      if (tracking) return;
      if (!currentKey) {
        button.disabled = true;
        button.setAttribute("aria-disabled", "true");
        hideStatus();
        hideDistance();
        return;
      }
      showModelState();
    },
    tick,
  };
}
