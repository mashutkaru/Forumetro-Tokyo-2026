/* Local live view inside the Program frame.
   The parent page owns the only shared connection.
   Camera sends are limited by LIVE_CAMERA_MS. At 40–60 viewers,
   400ms is about 150 messages a second once each viewer gets a copy.
   That is above the free Supabase cap (100/s) and inside the Pro cap (500/s). */
const LIVE_CAMERA_MS = 400;
const LIVE_POINTER_MS = 120;

const LIVE_SECTIONS = ["overview", "schedule", "location", "model", "tips"];
const LIVE_LINES = ["ginza", "hibiya", "yamanote", "oedo", "toyoko", "odakyu", "chiyoda", "asakusa"];
const LIVE_SNAP_KEYS = ["day", "section", "line", "model", "camera"];
const LIVE_CAMERA_KEYS = ["position", "target", "fov"];

const LIVE_TEXT = {
  en: {
    waiting: "Waiting",
    live: "Live",
    reconnecting: "Reconnecting",
    disconnected: "Presenter disconnected",
    ended: "Ended",
    presenting: "You are presenting",
    present: "Present",
    stop: "Stop live",
    host: "Host",
    phone: "Phone number",
    continue: "Continue",
    denied: "This number is not a host",
  },
  he: {
    waiting: "ממתינים",
    live: "בשידור",
    reconnecting: "מתחברים מחדש",
    disconnected: "המציג התנתק",
    ended: "הסתיים",
    presenting: "אתם מציגים",
    present: "הצגה",
    stop: "סיום השידור",
    host: "מארח",
    phone: "מספר טלפון",
    continue: "המשך",
    denied: "המספר אינו רשום כמארח",
  },
  ja: {
    waiting: "待機中",
    live: "ライブ",
    reconnecting: "再接続中",
    disconnected: "発表者が切断されました",
    ended: "終了",
    presenting: "この画面が発表中です",
    present: "発表する",
    stop: "ライブを終了",
    host: "ホスト",
    phone: "電話番号",
    continue: "続ける",
    denied: "この番号はホストではありません",
  },
};

let hostGateOpen = false;

let liveRole = "off";
let liveStatus = "waiting";
let liveGeneration = 0;
let liveSeq = 0;
let lastSentPlace = "";
let lastCameraSent = 0;
let cameraTimer = 0;
let pointerTimer = 0;
let pointerPending = null;
let pointerDown = false;
let lastPointerSent = 0;

function liveLang() {
  const lang = document.documentElement.lang;
  if (lang === "he" || lang === "ja") return lang;
  return "en";
}

function liveLabel(key) {
  const pack = LIVE_TEXT[liveLang()] || LIVE_TEXT.en;
  return pack[key] || LIVE_TEXT.en[key] || "";
}

function liveBanner() {
  return document.getElementById("liveViewBanner");
}

function savedHostPhone() {
  try {
    return localStorage.getItem("forumetro-live-host") || "";
  } catch (e) {
    return "";
  }
}

function knownHost() {
  return Boolean(window.ForumetroLiveHosts && window.ForumetroLiveHosts.allows(savedHostPhone()));
}

function paintLiveBanner() {
  const banner = liveBanner();
  const gate = document.getElementById("liveHostGate");
  const tools = document.getElementById("liveHostTools");
  const open = document.getElementById("liveHostOpen");
  const status = document.getElementById("liveViewStatus");
  const present = document.getElementById("liveViewPresent");
  const phoneLabel = document.querySelector("label[for='liveHostPhone']");
  const continueBtn = document.getElementById("liveHostContinue");
  const onLive = liveRole === "viewer" || liveRole === "presenter";
  const host = knownHost();
  const showBanner = onLive && (host || hostGateOpen);
  if (banner) banner.hidden = !showBanner;
  if (gate) gate.hidden = !showBanner || host;
  if (tools) tools.hidden = !showBanner || !host;
  if (open) {
    open.hidden = !onLive || host || hostGateOpen;
    open.textContent = liveLabel("host");
  }
  if (phoneLabel) phoneLabel.textContent = liveLabel("phone");
  if (continueBtn) continueBtn.textContent = liveLabel("continue");
  const key = liveRole === "presenter" && liveStatus === "live" ? "presenting" : liveStatus;
  if (status) status.textContent = liveLabel(key);
  if (present) present.textContent = liveRole === "presenter" ? liveLabel("stop") : liveLabel("present");
  if (banner) {
    banner.classList.toggle("is-live", liveStatus === "live" || liveRole === "presenter");
    banner.classList.toggle("is-ended", liveStatus === "ended" || liveStatus === "disconnected");
  }
  document.documentElement.classList.toggle("is-live-open", showBanner);
  document.documentElement.classList.toggle("is-live-gate", showBanner && !host);
}

function postLive(data) {
  if (!window.parent || window.parent === window) return;
  window.parent.postMessage(data, window.location.origin);
}

function finiteTriple(value) {
  return Array.isArray(value)
    && value.length === 3
    && value.every((n) => typeof n === "number" && Number.isFinite(n) && Math.abs(n) < 1e7);
}

function onlyKeys(obj, allowed) {
  if (!obj || typeof obj !== "object") return false;
  const keys = Object.keys(obj);
  return keys.length <= allowed.length && keys.every((key) => allowed.indexOf(key) !== -1);
}

function cleanSnapshot(snapshot) {
  if (!onlyKeys(snapshot, LIVE_SNAP_KEYS)) return null;
  if (typeof snapshot.day !== "string" || !/^\d{2}\.\d{2}$/.test(snapshot.day)) return null;
  if (LIVE_SECTIONS.indexOf(snapshot.section) === -1) return null;
  if (!(snapshot.line === null || LIVE_LINES.indexOf(snapshot.line) !== -1)) return null;
  if (!(snapshot.model === null || (typeof snapshot.model === "string" && /^models\/[A-Za-z0-9._-]+\.glb$/.test(snapshot.model)))) return null;
  if (snapshot.camera !== null) {
    if (!onlyKeys(snapshot.camera, LIVE_CAMERA_KEYS)) return null;
    if (!finiteTriple(snapshot.camera.position) || !finiteTriple(snapshot.camera.target)) return null;
    if (typeof snapshot.camera.fov !== "number" || snapshot.camera.fov < 10 || snapshot.camera.fov > 120) return null;
  }
  return {
    day: snapshot.day,
    section: snapshot.section,
    line: snapshot.line,
    model: snapshot.model,
    camera: snapshot.camera,
  };
}

function sendPlace(place, settled) {
  if (liveRole !== "presenter" || !window.ForumetroProgram) return;
  const clean = cleanSnapshot(place || window.ForumetroProgram.readPlace());
  if (!clean) return;
  const body = JSON.stringify(clean);
  if (!settled && body === lastSentPlace) return;
  lastSentPlace = body;
  lastCameraSent = Date.now();
  postLive({ type: "forumetro:live-state", snapshot: clean, settled: Boolean(settled) });
}

function scheduleCamera() {
  const wait = LIVE_CAMERA_MS - (Date.now() - lastCameraSent);
  if (wait <= 0) {
    sendPlace(window.ForumetroProgram.readPlace(), false);
    return;
  }
  if (cameraTimer) return;
  cameraTimer = window.setTimeout(() => {
    cameraTimer = 0;
    sendPlace(window.ForumetroProgram.readPlace(), false);
  }, wait);
}

function enterLiveView() {
  if (liveRole === "presenter" || liveRole === "viewer") {
    paintLiveBanner();
    return;
  }
  liveRole = "viewer";
  liveStatus = "waiting";
  liveGeneration = 0;
  liveSeq = 0;
  hostGateOpen = false;
  if (window.ForumetroProgram) window.ForumetroProgram.setMode("follow");
  paintLiveBanner();
  postLive({ type: "forumetro:live-enter" });
  postLive({ type: "forumetro:section", section: "live" });
}

function leaveLiveView() {
  if (liveRole === "off") return;
  liveRole = "off";
  liveStatus = "waiting";
  hostGateOpen = false;
  pointerDown = false;
  showFinger(null, null);
  if (window.ForumetroProgram) window.ForumetroProgram.setMode("off");
  paintLiveBanner();
  postLive({ type: "forumetro:live-leave" });
}

function fingerPoint(event) {
  const width = window.innerWidth || 1;
  const height = window.innerHeight || 1;
  const x = Math.min(1, Math.max(0, event.clientX / width));
  const y = Math.min(1, Math.max(0, event.clientY / height));
  return {
    x: Math.round(x * 1000) / 1000,
    y: Math.round(y * 1000) / 1000,
  };
}

function sendPointer(point) {
  postLive({
    type: "forumetro:live-pointer",
    x: point ? point.x : null,
    y: point ? point.y : null,
  });
}

function queuePointer(point) {
  const wait = LIVE_POINTER_MS - (Date.now() - lastPointerSent);
  if (wait <= 0) {
    lastPointerSent = Date.now();
    pointerPending = null;
    sendPointer(point);
    return;
  }
  pointerPending = point;
  if (pointerTimer) return;
  pointerTimer = window.setTimeout(() => {
    pointerTimer = 0;
    lastPointerSent = Date.now();
    const next = pointerPending;
    pointerPending = null;
    if (next) sendPointer(next);
  }, wait);
}

function showFinger(x, y) {
  const dot = document.getElementById("liveFinger");
  if (!dot) return;
  if (liveRole !== "viewer" || typeof x !== "number" || typeof y !== "number") {
    dot.classList.remove("is-on");
    return;
  }
  dot.style.left = (x * 100) + "%";
  dot.style.top = (y * 100) + "%";
  dot.classList.add("is-on");
}

function fingerBlocked(event) {
  return Boolean(event.target.closest("#liveViewBanner, #liveHostOpen, #liveHostGate"));
}

function onFingerDown(event) {
  if (liveRole !== "presenter" || !event.isPrimary || fingerBlocked(event)) return;
  pointerDown = true;
  queuePointer(fingerPoint(event));
}

function onFingerMove(event) {
  if (!pointerDown || liveRole !== "presenter" || !event.isPrimary) return;
  queuePointer(fingerPoint(event));
}

function onFingerUp(event) {
  if (!pointerDown || (event && !event.isPrimary)) return;
  pointerDown = false;
  if (pointerTimer) window.clearTimeout(pointerTimer);
  pointerTimer = 0;
  pointerPending = null;
  lastPointerSent = Date.now();
  sendPointer(null);
}

function togglePresent() {
  if (!knownHost()) return;
  if (liveRole === "presenter") {
    liveRole = "viewer";
    liveStatus = "ended";
    pointerDown = false;
    showFinger(null, null);
    if (window.ForumetroProgram) window.ForumetroProgram.setMode("follow");
    paintLiveBanner();
    postLive({ type: "forumetro:live-stop" });
    return;
  }
  enterLiveView();
  liveRole = "presenter";
  liveStatus = "live";
  if (window.ForumetroProgram) window.ForumetroProgram.setMode("present");
  paintLiveBanner();
  const snapshot = cleanSnapshot(window.ForumetroProgram.readPlace());
  postLive({ type: "forumetro:live-present", snapshot: snapshot, phone: savedHostPhone() });
}

function openHostGate() {
  hostGateOpen = true;
  const error = document.getElementById("liveHostError");
  if (error) error.hidden = true;
  paintLiveBanner();
  const input = document.getElementById("liveHostPhone");
  if (input) input.focus();
}

function submitHostPhone(event) {
  event.preventDefault();
  const input = document.getElementById("liveHostPhone");
  const error = document.getElementById("liveHostError");
  const phone = input ? input.value : "";
  if (!window.ForumetroLiveHosts || !window.ForumetroLiveHosts.allows(phone)) {
    if (error) {
      error.hidden = false;
      error.textContent = liveLabel("denied");
    }
    return;
  }
  try {
    localStorage.setItem("forumetro-live-host", phone.trim());
  } catch (e) {}
  hostGateOpen = false;
  if (error) error.hidden = true;
  paintLiveBanner();
}

function applyLiveMessage(data) {
  if (data.type === "forumetro:live-pointer") {
    if (liveRole !== "viewer") return;
    if (data.x === null && data.y === null) {
      showFinger(null, null);
      return;
    }
    if (typeof data.x !== "number" || typeof data.y !== "number") return;
    if (data.x < 0 || data.x > 1 || data.y < 0 || data.y > 1) return;
    showFinger(data.x, data.y);
    return;
  }
  if (data.type === "forumetro:live-role") {
    if (data.role === "presenter") {
      liveRole = "presenter";
      liveStatus = "live";
      showFinger(null, null);
      window.ForumetroProgram.setMode("present");
    } else if (data.role === "viewer" && liveRole === "viewer") {
      window.ForumetroProgram.setMode("follow");
    } else if (data.role === "viewer" && liveRole === "presenter" && data.notice === "taken-over") {
      liveRole = "viewer";
      liveStatus = "live";
      window.ForumetroProgram.setMode("follow");
    }
    paintLiveBanner();
    return;
  }
  if (data.type === "forumetro:live-status" && liveRole === "viewer") {
    if (LIVE_TEXT.en[data.status]) liveStatus = data.status;
    paintLiveBanner();
    return;
  }
  if (data.type !== "forumetro:live-apply" || liveRole !== "viewer") return;
  const clean = cleanSnapshot(data.snapshot);
  if (!clean) return;
  if (typeof data.generation !== "number" || typeof data.seq !== "number") return;
  if (data.generation < liveGeneration) return;
  if (data.generation === liveGeneration && data.seq < liveSeq) return;
  const first = data.generation !== liveGeneration;
  liveGeneration = data.generation;
  liveSeq = data.seq;
  if (data.status !== "ended") liveStatus = "live";
  window.ForumetroProgram.applyPlace(clean, { immediate: first });
  if (data.status === "ended") {
    liveStatus = "ended";
    showFinger(null, null);
  }
  if (first) showFinger(null, null);
  paintLiveBanner();
}

window.ForumetroLive = {
  enter: enterLiveView,
  leave: leaveLiveView,
  modelReady() {
    if (liveRole === "presenter") sendPlace(window.ForumetroProgram.readPlace(), true);
  },
};

function bindLiveView() {
  const banner = liveBanner();
  if (!banner || !window.ForumetroProgram) return;
  document.getElementById("liveViewPresent").addEventListener("click", togglePresent);
  document.addEventListener("pointerdown", onFingerDown);
  document.addEventListener("pointermove", onFingerMove);
  document.addEventListener("pointerup", onFingerUp);
  document.addEventListener("pointercancel", onFingerUp);
  document.getElementById("liveHostOpen").addEventListener("click", openHostGate);
  document.getElementById("liveHostGate").addEventListener("submit", submitHostPhone);
  window.ForumetroProgram.onPlace(() => sendPlace(window.ForumetroProgram.readPlace(), true));
  window.ForumetroProgram.onCamera((settled) => {
    if (settled) sendPlace(window.ForumetroProgram.readPlace(), true);
    else scheduleCamera();
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".program-lang-btn")) window.setTimeout(paintLiveBanner, 0);
  });
  window.addEventListener("message", (event) => {
    if (window.parent === window) return;
    if (event.origin !== window.location.origin || event.source !== window.parent) return;
    const data = event.data;
    if (!data || typeof data !== "object") return;
    if (data.type === "forumetro:set-lang") {
      window.setTimeout(paintLiveBanner, 0);
      return;
    }
    if (data.type === "forumetro:live-leave") {
      leaveLiveView();
      return;
    }
    applyLiveMessage(data);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && liveRole === "viewer") {
      postLive({ type: "forumetro:live-resume" });
    }
  });
  window.addEventListener("online", () => {
    if (liveRole === "viewer") postLive({ type: "forumetro:live-resume" });
  });
  window.addEventListener("offline", () => {
    if (liveRole === "viewer") {
      liveStatus = "reconnecting";
      paintLiveBanner();
    }
  });
  postLive({ type: "forumetro:live-ready" });
}

bindLiveView();
