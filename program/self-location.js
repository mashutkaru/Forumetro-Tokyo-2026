// Visitor's own location, drawn inside the current city model.
// Coordinates stay in this page. Nothing here is sent, stored, or written
// into the address bar, storage, cookies, or analytics.
// The pulsing dot is updated from the viewer's existing render loop (tick).
// This file does not start its own animation loop.

import { MODEL_GEO, isCalibrated, markerReady, classifyCoverage, isInsideCoverage, nearestPerimeter, wgs84ToWorld } from "./model-geo.js?v=8";

const GEO_OPTIONS = Object.freeze({
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 5000,
});

const FRESH_MS = 60000;
const DOT_PIXELS = 28;
const PIN_PIXELS = 46;
// Sprite center is measured from the bottom. This keeps the pin tip on the point.
const PIN_ANCHOR_Y = 10 / 128;
const MARKER_RED = "#d3122a";
const PIN_RED = "#e84838";

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
    en: "Outside model · {d} to model edge",
    ja: "モデルの外 · 端まで{d}",
    he: "מחוץ למודל · {d} עד קצה המודל",
  },
  outsideAbout: {
    en: "Outside model · about {d} to model edge",
    ja: "モデルの外 · 端までおよそ{d}",
    he: "מחוץ למודל · בערך {d} עד קצה המודל",
  },
  outsideUnknown: {
    en: "Outside model · distance approximate",
    ja: "モデルの外 · 距離は概算です",
    he: "מחוץ למודל · המרחק משוער",
  },
  edge: {
    en: "Near model edge · location approximate",
    ja: "モデルの端の近く · 位置は概算です",
    he: "ליד קצה המודל · המיקום משוער",
  },
  unknown: {
    en: "Location approximate · accuracy unavailable",
    ja: "位置は概算です · 精度がありません",
    he: "המיקום משוער · דיוק לא זמין",
  },
  uncalibrated: {
    en: "Location not calibrated for this model",
    ja: "このモデルの現在地はまだ調整されていません",
    he: "המיקום לא מכויל למודל הזה",
  },
  denied: {
    en: "Location is blocked. Allow it for this site in your browser settings.",
    ja: "位置情報が拒否されています。ブラウザの設定でこのサイトを許可してください。",
    he: "הגישה למיקום חסומה. אפשרו אותה לאתר זה בהגדרות הדפדפן.",
  },
  unavailable: {
    en: "Your position is unavailable.",
    ja: "現在地を取得できません。",
    he: "המיקום לא זמין.",
  },
  timeout: {
    en: "Location took too long.",
    ja: "現在地の取得に時間がかかりすぎました。",
    he: "איתור המיקום ארך יותר מדי.",
  },
  insecure: {
    en: "Location needs a secure page.",
    ja: "現在地には保護されたページが必要です。",
    he: "המיקום זמין רק בדף מאובטח.",
  },
  gesture: {
    en: "Tap Allow location. The browser will then ask.",
    ja: "「位置情報を許可」を押すと、ブラウザが確認します。",
    he: "לחצו על אפשר מיקום. הדפדפן יבקש אישור.",
  },
  stale: {
    en: "Location out of date",
    ja: "現在地の情報が古くなっています",
    he: "המיקום אינו עדכני",
  },
  unsupported: {
    en: "This browser cannot share your location.",
    ja: "このブラウザでは現在地を使えません。",
    he: "הדפדפן הזה לא יכול לשתף את המיקום.",
  },
};

const ACTION_COPY = {
  allow: {
    en: "Allow location",
    ja: "位置情報を許可",
    he: "אפשר מיקום",
  },
  retry: {
    en: "Retry",
    ja: "再試行",
    he: "נסו שוב",
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

function formatDistance(meters, lang, precise) {
  const value = Math.max(0, meters);
  let text;
  if (!precise) {
    if (value >= 100000) text = String(Math.round(value / 1000));
    else if (value >= 1000) text = (Math.round(value / 100) / 10).toFixed(1);
    else text = String(Math.max(10, Math.round(value / 10) * 10));
  } else if (value >= 100000) {
    text = String(Math.round(value / 1000));
  } else if (value >= 1000) {
    text = (Math.round(value / 100) / 10).toFixed(1);
  } else {
    text = String(Math.round(value));
  }
  const km = value >= 1000;
  if (km) return lang === "he" ? text + " ק״מ" : text + " km";
  return lang === "he" ? text + " מ׳" : text + " m";
}

export function createSelfLocation({
  THREE,
  scene,
  camera,
  stage,
  statusEl,
  distanceEl,
  allowBtn,
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
  let viewerActive = false;
  let meshReady = false;
  let tracking = false;
  let session = 0;
  let watchId = null;
  let lastFix = null;
  let staleShown = false;
  let group = null;
  let dot = null;
  let ring = null;
  let hereMap = null;
  let edgeMap = null;
  let edgeRim = null;
  let freshTimer = 0;
  const ndc = new THREE.Vector3();

  function paint(el, pack, vars) {
    el.dataset.en = fill(pack.en, vars);
    el.dataset.ja = fill(pack.ja, vars);
    el.dataset.he = fill(pack.he, vars);
    el.textContent = el.dataset[pageLang()] || el.dataset.en;
  }

  function setStatus(key, vars) {
    const pack = STATUS_COPY[key];
    if (!pack) return;
    const next = fill(pack[pageLang()] || pack.en, vars);
    if (!statusEl.hidden && statusEl.dataset.state === key && statusEl.textContent === next) return;
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

  function showAction(mode) {
    if (!allowBtn) return;
    const label = allowBtn.querySelector("span");
    if (!mode) {
      allowBtn.hidden = true;
      delete allowBtn.dataset.mode;
      return;
    }
    paint(label, ACTION_COPY[mode] || ACTION_COPY.allow);
    allowBtn.dataset.mode = mode;
    allowBtn.hidden = false;
  }

  function setDistance(meters, approximate) {
    if (!distanceEl) return;
    const pack = approximate ? STATUS_COPY.outsideAbout : STATUS_COPY.outside;
    const vars = {
      d: formatDistance(meters, pageLang(), !approximate),
    };
    const next = fill(pack[pageLang()] || pack.en, vars);
    if (!distanceEl.hidden && distanceEl.textContent === next) return;
    distanceEl.dataset.en = fill(pack.en, { d: formatDistance(meters, "en", !approximate) });
    distanceEl.dataset.ja = fill(pack.ja, { d: formatDistance(meters, "ja", !approximate) });
    distanceEl.dataset.he = fill(pack.he, { d: formatDistance(meters, "he", !approximate) });
    distanceEl.textContent = distanceEl.dataset[pageLang()] || distanceEl.dataset.en;
    distanceEl.hidden = false;
  }

  function setOutsideUnknown() {
    if (!distanceEl) return;
    const pack = STATUS_COPY.outsideUnknown;
    const next = pack[pageLang()] || pack.en;
    if (!distanceEl.hidden && distanceEl.textContent === next) return;
    paint(distanceEl, pack);
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
    hereMap = null;
    edgeMap = null;
    edgeRim = null;
  }

  function makeMap(draw) {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    draw(canvas.getContext("2d"));
    const texture = new THREE.CanvasTexture(canvas);
    if (THREE.SRGBColorSpace) texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  function drawLocationPin(ctx) {
    ctx.clearRect(0, 0, 128, 128);
    const cx = 64;
    const cy = 44;
    ctx.fillStyle = "rgba(20, 16, 16, 0.2)";
    ctx.beginPath();
    ctx.ellipse(cx, 120, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PIN_RED;
    ctx.beginPath();
    ctx.arc(cx, cy, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx - 16, cy + 22);
    ctx.lineTo(cx, 118);
    ctx.lineTo(cx + 16, cy + 22);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();
  }

  function ensureMarker() {
    if (group) return;
    hereMap = makeMap(drawLocationPin);
    edgeMap = makeMap((ctx) => {
      ctx.clearRect(0, 0, 128, 128);
      ctx.beginPath();
      ctx.moveTo(64, 12);
      ctx.lineTo(116, 64);
      ctx.lineTo(64, 116);
      ctx.lineTo(12, 64);
      ctx.closePath();
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(64, 30);
      ctx.lineTo(98, 64);
      ctx.lineTo(64, 98);
      ctx.lineTo(30, 64);
      ctx.closePath();
      ctx.fillStyle = MARKER_RED;
      ctx.fill();
    });

    dot = new THREE.Sprite(new THREE.SpriteMaterial({
      map: hereMap,
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

  function place(world, accuracyM, metersPerUnit, kind) {
    const y = groundY(world.x, world.z);
    if (y == null) return false;
    ensureMarker();
    const lift = 0.4 / metersPerUnit;
    const edge = kind === "edge";
    edgeRim = null;
    if (edge) {
      const box = boundsOf(getModelRoot());
      const yTop = y + lift;
      edgeRim = {
        x: world.x,
        z: world.z,
        yTop,
        yBot: box && !box.isEmpty() ? box.min.y + lift : yTop,
        cx: box && !box.isEmpty() ? (box.min.x + box.max.x) / 2 : world.x,
        cz: box && !box.isEmpty() ? (box.min.z + box.max.z) / 2 : world.z,
      };
    }
    group.position.set(world.x, edge ? edgeRim.yTop : y + lift, world.z);
    dot.material.map = edge ? edgeMap : hereMap;
    dot.material.opacity = 1;
    dot.material.needsUpdate = true;
    const radius = !edge && typeof accuracyM === "number" && Number.isFinite(accuracyM) && accuracyM > 0
      ? accuracyM / metersPerUnit
      : 0;
    ring.visible = radius > 0;
    ring.material.opacity = 0.4;
    if (radius > 0) ring.scale.set(radius, radius, radius);
    dot.position.set(0, 0.8 / metersPerUnit, 0);
    return true;
  }

  function modelIsReady() {
    const ready = markerReady(currentEntry, currentNorth);
    if (currentKey && isCalibrated(currentEntry) && !ready && !warned.has(currentKey)) {
      warned.add(currentKey);
      console.warn(
        "Forumetro: location stays off for " + currentKey
        + " until northDegrees matches VERIFIED_NORTH (" + currentNorth
        + "). That rotation is applied once, inside the coordinate conversion."
      );
    }
    return ready;
  }

  function fixAge(fix) {
    if (!fix || !Number.isFinite(fix.time)) return Infinity;
    return Date.now() - fix.time;
  }

  function knownAccuracy(value) {
    return typeof value === "number" && Number.isFinite(value) && value >= 0;
  }

  function stopWatch() {
    session += 1;
    tracking = false;
    if (watchId != null && navigator.geolocation && typeof navigator.geolocation.clearWatch === "function") {
      navigator.geolocation.clearWatch(watchId);
    }
    watchId = null;
  }

  function forgetFix() {
    lastFix = null;
    staleShown = false;
    dropMarker();
    hideDistance();
    showAction(null);
    requestRender();
  }

  function noteStale() {
    if (staleShown) return;
    staleShown = true;
    dropMarker();
    hideDistance();
    setStatus("stale");
    requestRender();
  }

  function ensureFreshTimer() {
    if (freshTimer) return;
    freshTimer = window.setInterval(() => {
      if (!tracking || !lastFix || document.hidden) return;
      if (fixAge(lastFix) < FRESH_MS) return;
      noteStale();
    }, 1000);
  }

  function beginWatch(fromGesture) {
    if (!viewerActive || !meshReady || document.hidden) return;
    if (!modelIsReady()) {
      stopWatch();
      dropMarker();
      hideDistance();
      setStatus("uncalibrated");
      showAction(null);
      return;
    }
    if (!window.isSecureContext) {
      stopWatch();
      forgetFix();
      setStatus("insecure");
      return;
    }
    if (!navigator.geolocation || typeof navigator.geolocation.watchPosition !== "function") {
      setStatus("unsupported");
      showAction(null);
      return;
    }
    if (fromGesture) {
      startWatch(true);
      return;
    }
    if (!navigator.permissions || typeof navigator.permissions.query !== "function") {
      startWatch(false);
      return;
    }
    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      if (!viewerActive || !meshReady || document.hidden) return;
      if (status && status.state === "denied") {
        stopWatch();
        dropMarker();
        hideDistance();
        setStatus("denied");
        showAction(null);
        return;
      }
      startWatch(false);
    }).catch(() => {
      startWatch(false);
    });
  }

  function startWatch(fromGesture) {
    if (watchId != null) {
      if (lastFix) applyFix();
      return;
    }
    showAction(null);
    tracking = true;
    ensureFreshTimer();
    session += 1;
    const token = session;
    const gestured = Boolean(fromGesture);
    if (lastFix) applyFix();
    else setStatus("locating");
    try {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          if (token === session) onFix(position);
        },
        (error) => {
          if (token === session) onError(error, gestured);
        },
        GEO_OPTIONS
      );
    } catch (e) {
      if (token === session) onError({ code: 2 }, gestured);
    }
  }

  function onVisibility() {
    if (document.visibilityState === "hidden") {
      stopWatch();
      dropMarker();
      hideDistance();
      requestRender();
      return;
    }
    if (!viewerActive || !meshReady) return;
    if (lastFix && fixAge(lastFix) >= FRESH_MS) noteStale();
    beginWatch(false);
  }

  function placePerimeter(nearest, metersPerUnit) {
    const world = nearest && wgs84ToWorld(currentEntry, nearest.lat, nearest.lon);
    if (!world || !place(world, 0, metersPerUnit, "edge")) {
      dropMarker();
      return false;
    }
    return true;
  }

  function applyFix() {
    if (!meshReady || !viewerActive || document.hidden || !lastFix) return;
    if (!modelIsReady()) {
      dropMarker();
      hideDistance();
      setStatus("uncalibrated");
      requestRender();
      return;
    }
    if (fixAge(lastFix) >= FRESH_MS) {
      noteStale();
      return;
    }
    staleShown = false;
    const kind = classifyCoverage(currentEntry, lastFix.lat, lastFix.lon, lastFix.accuracy);
    const nearest = nearestPerimeter(currentEntry, lastFix.lat, lastFix.lon);
    const metersPerUnit = currentEntry.metersPerUnit;
    const rawInside = isInsideCoverage(currentEntry, lastFix.lat, lastFix.lon);
    hideDistance();
    showAction(null);
    if (kind === "outside" || (kind === "unknown" && !rawInside)) {
      if (!placePerimeter(nearest, metersPerUnit)) {
        setStatus("locating");
        return;
      }
      hideStatus();
      if (kind === "unknown" || !nearest || !Number.isFinite(nearest.distanceM)) setOutsideUnknown();
      else {
        const uncertain = nearest.ambiguous
          || (knownAccuracy(lastFix.accuracy) && lastFix.accuracy > Math.max(50, nearest.distanceM * 0.2));
        setDistance(nearest.distanceM, uncertain);
      }
      requestRender();
      return;
    }
    if (kind === "edge") {
      const target = rawInside || !nearest
        ? { lat: lastFix.lat, lon: lastFix.lon }
        : nearest;
      const world = wgs84ToWorld(currentEntry, target.lat, target.lon);
      const ringMeters = rawInside ? lastFix.accuracy : 0;
      const markerKind = rawInside ? "here" : "edge";
      if (!world || !place(world, ringMeters, metersPerUnit, markerKind)) {
        dropMarker();
        setStatus("edge");
        requestRender();
        return;
      }
      setStatus("edge");
      requestRender();
      return;
    }
    if (kind === "unknown") {
      const world = wgs84ToWorld(currentEntry, lastFix.lat, lastFix.lon);
      if (!world || !place(world, 0, metersPerUnit, "here")) {
        dropMarker();
        setStatus("unknown");
        requestRender();
        return;
      }
      setStatus("unknown");
      requestRender();
      return;
    }
    const world = wgs84ToWorld(currentEntry, lastFix.lat, lastFix.lon);
    if (!world || !place(world, lastFix.accuracy, metersPerUnit, "here")) {
      dropMarker();
      setStatus("locating");
      return;
    }
    setStatus("inside");
    requestRender();
  }

  function onFix(position) {
    const coords = position && position.coords;
    const stamp = position && position.timestamp;
    const latOk = coords && Number.isFinite(coords.latitude) && coords.latitude >= -90 && coords.latitude <= 90;
    const lonOk = coords && Number.isFinite(coords.longitude) && coords.longitude >= -180 && coords.longitude <= 180;
    if (!latOk || !lonOk || !Number.isFinite(stamp)) {
      if (!lastFix) {
        dropMarker();
        setStatus("unavailable");
        showAction("retry");
      }
      return;
    }
    if (lastFix && stamp < lastFix.time) return;
    if (stamp > Date.now() + 60000) return;
    lastFix = {
      lat: coords.latitude,
      lon: coords.longitude,
      accuracy: knownAccuracy(coords.accuracy) ? coords.accuracy : null,
      time: stamp,
    };
    staleShown = false;
    applyFix();
  }

  function onError(error, fromGesture) {
    const code = error && error.code;
    const fresh = lastFix && fixAge(lastFix) < FRESH_MS;
    if (code === 1) {
      stopWatch();
      if (!fromGesture) {
        dropMarker();
        hideDistance();
        setStatus("gesture");
        showAction("allow");
        return;
      }
      dropMarker();
      hideDistance();
      setStatus("denied");
      showAction(null);
      return;
    }
    if (fresh) return;
    dropMarker();
    hideDistance();
    setStatus(code === 3 ? "timeout" : "unavailable");
    showAction("retry");
  }

  function projectNdc(x, y, z) {
    ndc.set(x, y, z);
    ndc.project(camera);
    return { x: ndc.x, y: ndc.y };
  }

  // The gray base is a vertical wall at the same ground edge. On the near
  // side its bottom is the outline you see; on the far side the top is.
  function outerRimY() {
    if (!edgeRim) return null;
    const center = projectNdc(edgeRim.cx, edgeRim.yTop, edgeRim.cz);
    const top = projectNdc(edgeRim.x, edgeRim.yTop, edgeRim.z);
    const bottom = projectNdc(edgeRim.x, edgeRim.yBot, edgeRim.z);
    const points = [center, top, bottom];
    if (points.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) return edgeRim.yTop;
    const fromCenter = (point) => (point.x - center.x) ** 2 + (point.y - center.y) ** 2;
    return fromCenter(bottom) > fromCenter(top) ? edgeRim.yBot : edgeRim.yTop;
  }

  function tick() {
    if (!dot || !group || !camera) return;
    if (edgeRim) {
      const y = outerRimY();
      if (y != null) group.position.y = y;
    }
    const height = Math.max(stage.clientHeight || 1, 1);
    const dist = Math.max(camera.position.distanceTo(group.position), 0.5);
    const worldH = 2 * Math.tan((camera.fov * Math.PI) / 360) * dist;
    const edge = dot.material.map === edgeMap;
    dot.center.set(0.5, edge ? 0.5 : PIN_ANCHOR_Y);
    const pulse = edge ? 1 : 1 + 0.12 * Math.sin(performance.now() * 0.005);
    const px = edge ? DOT_PIXELS : PIN_PIXELS;
    const size = worldH * (px / height) * pulse;
    const lift = currentEntry && currentEntry.metersPerUnit > 0 ? 0.8 / currentEntry.metersPerUnit : 0.8;
    if (edge && edgeRim) {
      const ox = edgeRim.x - edgeRim.cx;
      const oz = edgeRim.z - edgeRim.cz;
      const len = Math.hypot(ox, oz) || 1;
      const out = size * 0.5;
      dot.position.set((ox / len) * out, lift, (oz / len) * out);
    } else {
      dot.position.set(0, lift, 0);
    }
    dot.scale.set(size, size, 1);
  }

  if (allowBtn) {
    allowBtn.addEventListener("click", () => {
      showAction(null);
      beginWatch(true);
    });
  }
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", () => {
    viewerActive = false;
    stopWatch();
    forgetFix();
    hideStatus();
  });

  return {
    bindModel(key, verifiedNorth) {
      dropMarker();
      hideDistance();
      showAction(null);
      meshReady = false;
      currentKey = key || null;
      currentEntry = key && Object.prototype.hasOwnProperty.call(MODEL_GEO, key) ? MODEL_GEO[key] : null;
      currentNorth = typeof verifiedNorth === "number" && Number.isFinite(verifiedNorth) ? verifiedNorth : null;
      if (!modelIsReady()) {
        stopWatch();
        setStatus("uncalibrated");
        return;
      }
      hideStatus();
    },
    dropMarker,
    reapply() {
      meshReady = true;
      beginWatch(false);
    },
    noteFailed() {
      meshReady = false;
      stopWatch();
      forgetFix();
      hideStatus();
    },
    deactivate() {
      viewerActive = false;
      stopWatch();
      forgetFix();
      hideStatus();
    },
    resumeIdle() {
      viewerActive = true;
      if (!currentKey) {
        hideStatus();
        hideDistance();
        showAction(null);
        return;
      }
      beginWatch(false);
    },
    tick,
  };
}
