import { projectToWorld } from "./model-geo.js?v=3";
import {
  solvePair,
  smallestAngleDelta,
  pointErrorMeters,
  errorBand,
  inspectBoundary,
} from "./calibration-math.js?v=1";

// Developer-only panel. It is loaded only when the address has ?calibrate=1.
// Measurements stay in this page's memory. Nothing is stored or sent.

const COPY = {
  title: ["Calibration", "כיול"],
  privacy: [
    "Developer tool. These notes stay in this open page. The phone's location is not used.",
    "כלי למפתחים. הרישומים נשארים בדף הפתוח הזה. המיקום של הטלפון לא בשימוש.",
  ],
  landmarks: ["Landmarks", "נקודות ציון"],
  boundary: ["Model boundary", "גבול המודל"],
  hide: ["Hide panel", "הסתרת הלוח"],
  show: ["Show calibration", "הצגת הכיול"],
  landmarkHint: [
    "Click a landmark on the model, then type its name and the latitude and longitude from a map.",
    "לחצו על נקודת ציון במודל, ואז הקלידו את השם ואת קו הרוחב וקו האורך מהמפה.",
  ],
  boundaryHint: [
    "Click the corners of the modeled streets, in order. Then type each corner's latitude and longitude from a map.",
    "לחצו לפי הסדר על פינות הרחובות שבמודל. אחר כך הקלידו לכל פינה קו רוחב וקו אורך מהמפה.",
  ],
  pairHint: [
    "The first two saved landmarks set the scale. Each landmark after them checks the result.",
    "שתי נקודות הציון הראשונות קובעות את קנה המידה. כל נקודה שאחריהן בודקת את התוצאה.",
  ],
  name: ["Name", "שם"],
  lat: ["Latitude", "קו רוחב"],
  lon: ["Longitude", "קו אורך"],
  save: ["Save", "שמירה"],
  cancel: ["Cancel", "ביטול"],
  edit: ["Edit", "עריכה"],
  delete: ["Delete", "מחיקה"],
  up: ["Up", "למעלה"],
  down: ["Down", "למטה"],
  calculate: ["Calculate calibration", "חישוב הכיול"],
  copyJson: ["Copy calibration JSON", "העתקת נתוני הכיול"],
  copyMeasures: ["Copy landmark measurements", "העתקת המדידות"],
  waiting: ["Waiting for the model.", "ממתינים למודל."],
  empty: ["No landmarks yet.", "עדיין אין נקודות ציון."],
  emptyBoundary: ["No boundary corners yet.", "עדיין אין פינות לגבול."],
  needName: [
    "Enter a name and the latitude and longitude from a map.",
    "הזינו שם, קו רוחב וקו אורך מהמפה.",
  ],
  needGeo: [
    "Enter the latitude and longitude from a map.",
    "הזינו קו רוחב וקו אורך מהמפה.",
  ],
  tooClose: [
    "Those two landmarks are too close to set a scale.",
    "שתי נקודות הציון קרובות מדי בשביל לקבוע קנה מידה.",
  ],
  needThird: [
    "Add a third landmark before the calibration can be copied.",
    "הוסיפו נקודת ציון שלישית לפני שאפשר להעתיק את הכיול.",
  ],
  northOk: ["North matches the compass.", "הצפון תואם למצפן."],
  noCompass: [
    "This model has no compass north, so the result cannot be copied.",
    "למודל הזה אין צפון במצפן, ולכן אי אפשר להעתיק את התוצאה.",
  ],
  reviewNorth: [
    "I reviewed this difference. Keep the compass north.",
    "בדקתי את ההפרש. להשאיר את הצפון של המצפן.",
  ],
  boxWarn: [
    "These corners follow the model's box. Trace the streets, or confirm that this really is the street edge.",
    "הפינות האלה עוקבות אחרי התיבה של המודל. סמנו את הרחובות, או אשרו שזה באמת קצה הרחוב.",
  ],
  boxAck: [
    "I traced the real streets, not the model box.",
    "סימנתי את הרחובות עצמם, לא את תיבת המודל.",
  ],
  few: ["The boundary needs at least three corners.", "לגבול צריך לפחות שלוש פינות."],
  invalid: ["A boundary corner is missing a real latitude and longitude.", "לפינה בגבול חסרים קו רוחב וקו אורך אמיתיים."],
  duplicate: ["Two boundary corners are the same point.", "שתי פינות בגבול הן אותה נקודה."],
  cross: ["The boundary crosses itself.", "הגבול חוצה את עצמו."],
  transform: ["A boundary corner could not be placed on the model.", "פינה בגבול לא ניתנת להצבה על המודל."],
  transformFar: [
    "A boundary corner is more than 10 m from the position its map coordinates predict.",
    "פינה בגבול רחוקה ביותר מ־10 מ׳ מהמקום שהקואורדינטות שלה חוזות.",
  ],
  copied: ["Copied.", "הועתק."],
  copyByHand: ["Select the text below and copy it.", "סמנו את הטקסט למטה והעתיקו אותו."],
  moveHint: ["Click the model again to move this point.", "לחצו שוב על המודל כדי להזיז את הנקודה."],
  picked: ["Selected point", "הנקודה שנבחרה"],
  colLandmark: ["Landmark", "נקודת ציון"],
  colX: ["World X", "X במודל"],
  colZ: ["World Z", "Z במודל"],
  colLat: ["Latitude", "קו רוחב"],
  colLon: ["Longitude", "קו אורך"],
  within5: ["within 5 m", "עד 5 מ׳"],
  within10: ["within 10 m", "עד 10 מ׳"],
  over10: ["more than 10 m", "יותר מ־10 מ׳"],
  check: ["Check", "בדיקה"],
  anchor: ["Anchor", "עוגן"],
  scale: ["Meters per model unit", "מטרים ליחידת מודל"],
  compass: ["Compass north", "צפון המצפן"],
  measured: ["Measured rotation", "הסיבוב שנמדד"],
};

function text(key) {
  const pair = COPY[key];
  return document.documentElement.lang === "he" ? pair[1] : pair[0];
}

function blankSession() {
  return {
    landmarks: [],
    boundary: [],
    mode: "landmark",
    draft: null,
    editingId: null,
    northReviewed: false,
    boxReviewed: false,
    nextId: 1,
  };
}

function finite(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readPair(latRaw, lonRaw) {
  let latText = String(latRaw || "").trim();
  let lonText = String(lonRaw || "").trim();
  if (latText.includes(",") && !lonText) {
    const parts = latText.split(",");
    latText = parts[0].trim();
    lonText = parts.slice(1).join(",").trim();
  }
  const lat = Number(latText);
  const lon = Number(lonText);
  if (!finite(lat) || !finite(lon)) return null;
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;
  return { lat, lon };
}

function fmt(value, digits) {
  return finite(value) ? value.toFixed(digits) : "";
}

let viewerRef = null;
let activeKey = null;
const sessions = new Map();
let panel = null;
let built = false;

function current() {
  const key = activeKey || "";
  if (!sessions.has(key)) sessions.set(key, blankSession());
  return sessions.get(key);
}

function context() {
  if (!viewerRef || typeof viewerRef.getCalibrationContext !== "function") return { key: null, northDegrees: null, ready: false };
  return viewerRef.getCalibrationContext() || { key: null, northDegrees: null, ready: false };
}

function rowComplete(row, boundary) {
  if (!row || !finite(row.x) || !finite(row.z) || !finite(row.lat) || !finite(row.lon)) return false;
  if (!boundary && !row.name) return false;
  return true;
}

function assessment() {
  const session = current();
  const ctx = context();
  const first = session.landmarks[0];
  const second = session.landmarks[1];
  const pairReady = rowComplete(first) && rowComplete(second);
  const solution = pairReady ? solvePair(first, second) : null;
  const north = finite(ctx.northDegrees) ? ctx.northDegrees : null;
  const delta = solution && north != null ? smallestAngleDelta(solution.measuredNorth, north) : null;
  const northAgrees = delta != null && Math.abs(delta) <= 1;
  const checks = [];
  if (solution && north != null) {
    const projector = predict(solution, north);
    session.landmarks.slice(2).filter((row) => rowComplete(row)).forEach((row) => {
      const projected = projector(row);
      const meters = pointErrorMeters(projected && projected.world, row, solution.metersPerUnit);
      checks.push({ name: row.name, meters, band: errorBand(meters) });
    });
  }
  const boundary = inspectBoundary(
    session.boundary,
    solution && north != null ? predict(solution, north) : null,
    viewerRef && viewerRef.getFootprint ? viewerRef.getFootprint() : null
  );
  const incomplete = session.landmarks.some((row) => !rowComplete(row))
    || session.boundary.some((row) => !rowComplete(row, true));
  const checksOk = session.landmarks.length >= 3
    && checks.length >= 1
    && checks.every((item) => item.band === "good" || item.band === "warn");
  const boundaryOk = session.boundary.length >= 3
    && boundary.issues.length === 0
    && boundary.maxTransformM != null
    && boundary.maxTransformM <= 10
    && (!boundary.looksLikeBox || session.boxReviewed);
  const northOk = northAgrees || (delta != null && session.northReviewed);
  const exportReady = Boolean(solution && ctx.key && north != null && checksOk && northOk && boundaryOk && !incomplete);
  return { solution, north, delta, northAgrees, checks, boundary, checksOk, boundaryOk, northOk, exportReady, pairReady, landmarkCount: session.landmarks.length, boundaryCount: session.boundary.length };
}

function entryFrom(solution, northDegrees) {
  if (!solution || !finite(northDegrees)) return null;
  return {
    anchorWorld: solution.anchorWorld,
    anchorGeo: solution.anchorGeo,
    metersPerUnit: solution.metersPerUnit,
    northDegrees,
  };
}

function predict(solution, northDegrees) {
  const entry = entryFrom(solution, northDegrees);
  if (!entry) return null;
  return (point) => {
    const world = projectToWorld(entry, point.lat, point.lon);
    if (!world) return null;
    return { world, metersPerUnit: solution.metersPerUnit };
  };
}

function disposeObject(object) {
  if (object.geometry) object.geometry.dispose();
  const materials = object.material ? (Array.isArray(object.material) ? object.material : [object.material]) : [];
  materials.forEach((material) => {
    if (material.map) material.map.dispose();
    material.dispose();
  });
}

function pinSprite(THREE, label, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(64, 64, 54, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#ffffff";
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 58px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 64, 68);
  const map = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map, transparent: true, depthTest: false, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.renderOrder = 30;
  sprite.raycast = function () {};
  return sprite;
}

function drawPins() {
  if (!viewerRef || typeof viewerRef.calibrationOverlay !== "function") return;
  const THREE = drawPins.THREE;
  if (!THREE) return;
  const group = viewerRef.calibrationOverlay();
  group.children.slice().forEach((child) => {
    group.remove(child);
    disposeObject(child);
  });
  const session = current();
  const footprint = viewerRef.getFootprint ? viewerRef.getFootprint() : null;
  const span = footprint ? Math.max(footprint.maxX - footprint.minX, footprint.maxZ - footprint.minZ, 1) : 40;
  const size = span * 0.045;
  const place = (sprite, point, selected) => {
    const scale = selected ? size * 1.45 : size;
    sprite.scale.set(scale, scale, 1);
    sprite.position.set(point.x, point.y + size * 0.2, point.z);
    group.add(sprite);
  };
  session.landmarks.forEach((row, index) => {
    const selected = session.editingId === row.id && session.mode === "landmark";
    place(pinSprite(THREE, String(index + 1), selected ? "#c89600" : "#e07a00"), row, selected);
  });
  if (session.draft && session.mode === "landmark") {
    place(pinSprite(THREE, "?", "#7a4e00"), session.draft, true);
  }
  session.boundary.forEach((row, index) => {
    const selected = session.editingId === row.id && session.mode === "boundary";
    place(pinSprite(THREE, String(index + 1), selected ? "#c89600" : "#1a6fd4"), row, selected);
  });
  if (session.draft && session.mode === "boundary") {
    place(pinSprite(THREE, "?", "#1a6fd4"), session.draft, true);
  }
  if (session.boundary.length >= 2) {
    const points = session.boundary.map((row) => new THREE.Vector3(row.x, row.y + size * 0.05, row.z));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x1a6fd4 });
    const line = session.boundary.length >= 3 ? new THREE.LineLoop(geometry, material) : new THREE.Line(geometry, material);
    line.raycast = function () {};
    line.renderOrder = 20;
    group.add(line);
  }
  if (typeof viewerRef.requestRender === "function") viewerRef.requestRender();
}

function closeEditor() {
  const session = current();
  session.draft = null;
  session.editingId = null;
  const form = panel.querySelector(".cal-form");
  form.hidden = true;
  panel.querySelector(".cal-form-error").textContent = "";
}

function openEditor(point) {
  const session = current();
  const form = panel.querySelector(".cal-form");
  const editing = session.editingId != null;
  const list = session.mode === "boundary" ? session.boundary : session.landmarks;
  const row = editing ? list.find((item) => item.id === session.editingId) : null;
  form.hidden = false;
  panel.querySelector(".cal-name").hidden = session.mode !== "landmark";
  panel.querySelector(".cal-move").hidden = !editing;
  if (!openEditor.keepValues) {
    panel.querySelector('[name="name"]').value = row ? row.name : "";
    panel.querySelector('[name="lat"]').value = row && finite(row.lat) ? String(row.lat) : "";
    panel.querySelector('[name="lon"]').value = row && finite(row.lon) ? String(row.lon) : "";
  }
  openEditor.keepValues = false;
  const here = point || row || session.draft;
  panel.querySelector(".cal-xyz").textContent = here
    ? text("picked") + "  X " + fmt(here.x, 3) + "   Z " + fmt(here.z, 3)
    : "";
}

function refresh() {
  if (!panel) return;
  const session = current();
  const ctx = context();
  const report = assessment();
  panel.querySelector(".cal-key").textContent = ctx.key || text("waiting");
  panel.querySelector('[data-mode="landmark"]').setAttribute("aria-pressed", session.mode === "landmark" ? "true" : "false");
  panel.querySelector('[data-mode="boundary"]').setAttribute("aria-pressed", session.mode === "boundary" ? "true" : "false");
  panel.querySelector(".cal-hint-landmark").hidden = session.mode !== "landmark";
  panel.querySelector(".cal-hint-boundary").hidden = session.mode !== "boundary";
  panel.querySelector('[name="name"]').placeholder = text("name");
  panel.querySelector('[name="lat"]').placeholder = "35.6660000";
  panel.querySelector('[name="lon"]').placeholder = "139.7580000";
  paintTable(session);
  paintResult(report, ctx);
  const copyJson = panel.querySelector('[data-act="copy-json"]');
  copyJson.disabled = !report.exportReady;
  panel.querySelector('[data-act="calculate"]').disabled = !report.pairReady;
  panel.querySelector('[data-act="copy-measures"]').disabled = session.landmarks.length + session.boundary.length === 0;
  if (!panel.querySelector(".cal-form").hidden) {
    openEditor.keepValues = true;
    openEditor();
  }
  drawPins();
}

function paintTable(session) {
  const wrap = panel.querySelector(".cal-table-wrap");
  const rows = session.mode === "boundary" ? session.boundary : session.landmarks;
  const headers = session.mode === "boundary"
    ? [text("colLat"), text("colLon"), text("colX"), text("colZ")]
    : [text("colLandmark"), text("colX"), text("colZ"), text("colLat"), text("colLon")];
  if (!rows.length) {
    wrap.innerHTML = "<p>" + escapeHtml(session.mode === "boundary" ? text("emptyBoundary") : text("empty")) + "</p>";
    return;
  }
  const body = rows.map((row, index) => {
    const selected = row.id === session.editingId ? " is-selected" : "";
    const cells = session.mode === "boundary"
      ? [fmt(row.lat, 7), fmt(row.lon, 7), fmt(row.x, 3), fmt(row.z, 3)]
      : [row.name, fmt(row.x, 3), fmt(row.z, 3), fmt(row.lat, 7), fmt(row.lon, 7)];
    const buttons = [
      buttonHtml("edit", text("edit")),
      buttonHtml("delete", text("delete")),
      buttonHtml("up", text("up"), index === 0),
      buttonHtml("down", text("down"), index === rows.length - 1),
    ].join("");
    return "<tr class=\"" + selected.trim() + "\" data-id=\"" + row.id + "\"><td>"
      + cells.map((cell) => escapeHtml(cell)).join("</td><td>")
      + "</td><td class=\"cal-row-actions\">" + buttons + "</td></tr>";
  }).join("");
  wrap.innerHTML = "<table><thead><tr>"
    + headers.map((header) => "<th>" + escapeHtml(header) + "</th>").join("")
    + "<th></th></tr></thead><tbody>" + body + "</tbody></table>";
}

function buttonHtml(act, label, disabled) {
  return "<button type=\"button\" data-act=\"" + act + "\"" + (disabled ? " disabled" : "") + ">" + escapeHtml(label) + "</button>";
}

function paintResult(report, ctx) {
  const box = panel.querySelector(".cal-result");
  const lines = ["<p>" + escapeHtml(text("pairHint")) + "</p>"];
  if (!report.solution) {
    if (report.pairReady) lines.push("<p class=\"cal-bad\">" + escapeHtml(text("tooClose")) + "</p>");
  } else {
    lines.push(
      "<p>" + escapeHtml(text("anchor")) + " X " + fmt(report.solution.anchorWorld.x, 3)
      + " Z " + fmt(report.solution.anchorWorld.z, 3)
      + " · " + fmt(report.solution.anchorGeo.lat, 7) + ", " + fmt(report.solution.anchorGeo.lon, 7) + "</p>"
    );
    lines.push("<p>" + escapeHtml(text("scale")) + ": " + fmt(report.solution.metersPerUnit, 4) + "</p>");
    lines.push("<p>" + escapeHtml(text("compass")) + ": " + (report.north == null ? "—" : fmt(report.north, 2) + "°") + "</p>");
    lines.push("<p>" + escapeHtml(text("measured")) + ": " + fmt(report.solution.measuredNorth, 2) + "°</p>");
    if (report.north == null) lines.push("<p class=\"cal-bad\">" + escapeHtml(text("noCompass")) + "</p>");
    else if (report.northAgrees) lines.push("<p class=\"cal-good\">" + escapeHtml(text("northOk")) + "</p>");
    else lines.push("<p class=\"cal-bad\">" + escapeHtml(northWarning(report.delta)) + "</p>");
    if (report.landmarkCount < 3) lines.push("<p>" + escapeHtml(text("needThird")) + "</p>");
    report.checks.forEach((item) => {
      const klass = item.band === "good" ? "cal-good" : item.band === "warn" ? "cal-warn" : "cal-bad";
      const words = item.band === "good" ? text("within5") : item.band === "warn" ? text("within10") : text("over10");
      lines.push("<p class=\"" + klass + "\">" + escapeHtml(text("check") + " · " + item.name + ": " + fmt(item.meters, 1) + " m · " + words) + "</p>");
    });
  }
  boundaryMessages(report.boundary, report.boundaryCount).forEach((line) => lines.push(line));
  box.innerHTML = lines.join("");
  const northBox = panel.querySelector(".cal-north");
  const showNorth = Boolean(report.solution && report.north != null && !report.northAgrees);
  northBox.hidden = !showNorth;
  northBox.querySelector("span").textContent = text("reviewNorth");
  northBox.querySelector("input").checked = current().northReviewed;
  const boxCheck = panel.querySelector(".cal-box");
  boxCheck.hidden = !report.boundary.looksLikeBox;
  boxCheck.querySelector("input").checked = current().boxReviewed;
  panel.querySelector(".cal-model").textContent = ctx.key ? "" : "";
}

function northWarning(delta) {
  const amount = fmt(Math.abs(delta), 1);
  if (document.documentElement.lang === "he") {
    return "הסיבוב שנמדד שונה מהמצפן ב־" + amount + "°. הצפון של המצפן לא שונה.";
  }
  return "Measured rotation differs from the compass by " + amount + "°. The compass north was not changed.";
}

function boundaryMessages(boundary, count) {
  if (!count) return [];
  const lines = [];
  const labels = { few: "few", invalid: "invalid", duplicate: "duplicate", cross: "cross", transform: "transform" };
  boundary.issues.forEach((code) => {
    if (labels[code]) lines.push("<p class=\"cal-bad\">" + escapeHtml(text(labels[code])) + "</p>");
  });
  if (boundary.looksLikeBox) lines.push("<p class=\"cal-bad\">" + escapeHtml(text("boxWarn")) + "</p>");
  if (boundary.maxTransformM != null && boundary.maxTransformM > 10) {
    lines.push("<p class=\"cal-bad\">" + escapeHtml(text("transformFar")) + "</p>");
  } else if (boundary.maxTransformM != null && boundary.issues.length === 0) {
    const band = errorBand(boundary.maxTransformM);
    const klass = band === "good" ? "cal-good" : band === "warn" ? "cal-warn" : "cal-bad";
    lines.push("<p class=\"" + klass + "\">" + escapeHtml(text("boundary") + ": " + fmt(boundary.maxTransformM, 1) + " m") + "</p>");
  }
  return lines;
}

function onHit(hit) {
  const point = hit && hit.point;
  if (!point || !finite(point.x) || !finite(point.z)) return;
  const session = current();
  const picked = { x: point.x, y: finite(point.y) ? point.y : 0, z: point.z };
  if (session.editingId != null) {
    const list = session.mode === "boundary" ? session.boundary : session.landmarks;
    const row = list.find((item) => item.id === session.editingId);
    if (row) {
      row.x = picked.x;
      row.y = picked.y;
      row.z = picked.z;
      session.northReviewed = false;
      session.boxReviewed = false;
      openEditor(row);
      refresh();
      return;
    }
  }
  session.draft = picked;
  session.editingId = null;
  openEditor.keepValues = false;
  openEditor(picked);
  refresh();
}

function saveEditor(event) {
  event.preventDefault();
  const session = current();
  const error = panel.querySelector(".cal-form-error");
  const geo = readPair(panel.querySelector('[name="lat"]').value, panel.querySelector('[name="lon"]').value);
  const name = panel.querySelector('[name="name"]').value.trim();
  if (session.mode === "landmark" && (!name || !geo)) {
    error.textContent = text("needName");
    return;
  }
  if (session.mode === "boundary" && !geo) {
    error.textContent = text("needGeo");
    return;
  }
  const list = session.mode === "boundary" ? session.boundary : session.landmarks;
  if (session.editingId != null) {
    const row = list.find((item) => item.id === session.editingId);
    if (!row) return;
    if (session.mode === "landmark") row.name = name;
    row.lat = geo.lat;
    row.lon = geo.lon;
  } else if (session.draft) {
    const row = {
      id: session.nextId++,
      x: session.draft.x,
      y: session.draft.y,
      z: session.draft.z,
      lat: geo.lat,
      lon: geo.lon,
    };
    if (session.mode === "landmark") row.name = name;
    list.push(row);
  } else {
    return;
  }
  session.northReviewed = false;
  session.boxReviewed = false;
  error.textContent = "";
  closeEditor();
  refresh();
}

function moveRow(list, id, direction) {
  const index = list.findIndex((item) => item.id === id);
  const next = index + direction;
  if (index < 0 || next < 0 || next >= list.length) return;
  const row = list[index];
  list.splice(index, 1);
  list.splice(next, 0, row);
}

function onTableClick(event) {
  const button = event.target.closest("button");
  if (!button) return;
  const rowEl = button.closest("tr");
  if (!rowEl) return;
  const id = Number(rowEl.dataset.id);
  const session = current();
  const list = session.mode === "boundary" ? session.boundary : session.landmarks;
  const row = list.find((item) => item.id === id);
  if (!row) return;
  if (button.dataset.act === "delete") {
    list.splice(list.indexOf(row), 1);
    if (session.editingId === id) closeEditor();
    session.northReviewed = false;
    session.boxReviewed = false;
    refresh();
    return;
  }
  if (button.dataset.act === "up" || button.dataset.act === "down") {
    moveRow(list, id, button.dataset.act === "up" ? -1 : 1);
    session.northReviewed = false;
    session.boxReviewed = false;
    refresh();
    return;
  }
  if (button.dataset.act === "edit") {
    session.draft = null;
    session.editingId = id;
    openEditor(row);
    refresh();
  }
}

function calibrationObject(report, key) {
  return {
    [key]: {
      anchorWorld: {
        x: report.solution.anchorWorld.x,
        z: report.solution.anchorWorld.z,
      },
      anchorGeo: {
        lat: report.solution.anchorGeo.lat,
        lon: report.solution.anchorGeo.lon,
      },
      metersPerUnit: report.solution.metersPerUnit,
      northDegrees: report.north,
      coverage: current().boundary.map((point) => ({ lat: point.lat, lon: point.lon })),
    },
  };
}

function measurementObject(ctx) {
  const session = current();
  const report = assessment();
  return {
    model: ctx.key,
    compassNorth: ctx.northDegrees,
    measuredNorth: report.solution ? report.solution.measuredNorth : null,
    landmarks: session.landmarks.map((row) => ({
      name: row.name,
      x: row.x,
      z: row.z,
      lat: row.lat,
      lon: row.lon,
    })),
    boundary: session.boundary.map((row) => ({
      lat: row.lat,
      lon: row.lon,
      x: row.x,
      z: row.z,
    })),
  };
}

async function copyText(value) {
  const box = panel.querySelector(".cal-export");
  const note = panel.querySelector(".cal-copy-note");
  box.hidden = false;
  box.value = value;
  box.focus();
  box.select();
  let copied = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
      copied = true;
    }
  } catch (e) {
    copied = false;
  }
  if (!copied) {
    try {
      copied = document.execCommand("copy");
    } catch (err) {
      copied = false;
    }
  }
  note.textContent = copied ? text("copied") : text("copyByHand");
}

function build(viewer) {
  panel = document.createElement("section");
  panel.className = "cal-panel";
  panel.innerHTML = `
    <h2 data-en="${COPY.title[0]}" data-he="${COPY.title[1]}">${COPY.title[0]}</h2>
    <p data-en="${COPY.privacy[0]}" data-he="${COPY.privacy[1]}">${COPY.privacy[0]}</p>
    <p class="cal-key"></p>
    <div class="cal-modes">
      <button type="button" data-mode="landmark" data-en="${COPY.landmarks[0]}" data-he="${COPY.landmarks[1]}">${COPY.landmarks[0]}</button>
      <button type="button" data-mode="boundary" data-en="${COPY.boundary[0]}" data-he="${COPY.boundary[1]}">${COPY.boundary[0]}</button>
      <button type="button" data-act="toggle" data-en="${COPY.hide[0]}" data-he="${COPY.hide[1]}">${COPY.hide[0]}</button>
    </div>
    <div class="cal-body">
      <p class="cal-hint-landmark" data-en="${COPY.landmarkHint[0]}" data-he="${COPY.landmarkHint[1]}">${COPY.landmarkHint[0]}</p>
      <p class="cal-hint-boundary" data-en="${COPY.boundaryHint[0]}" data-he="${COPY.boundaryHint[1]}" hidden>${COPY.boundaryHint[0]}</p>
      <form class="cal-form" hidden>
        <p class="cal-xyz"></p>
        <p class="cal-move" data-en="${COPY.moveHint[0]}" data-he="${COPY.moveHint[1]}" hidden>${COPY.moveHint[0]}</p>
        <label class="cal-name"><span data-en="${COPY.name[0]}" data-he="${COPY.name[1]}">${COPY.name[0]}</span><input name="name" type="text" autocomplete="off"></label>
        <label><span data-en="${COPY.lat[0]}" data-he="${COPY.lat[1]}">${COPY.lat[0]}</span><input name="lat" type="text" inputmode="decimal" autocomplete="off"></label>
        <label><span data-en="${COPY.lon[0]}" data-he="${COPY.lon[1]}">${COPY.lon[0]}</span><input name="lon" type="text" inputmode="decimal" autocomplete="off"></label>
        <p class="cal-form-error"></p>
        <div class="cal-actions">
          <button type="submit" data-en="${COPY.save[0]}" data-he="${COPY.save[1]}">${COPY.save[0]}</button>
          <button type="button" data-act="cancel" data-en="${COPY.cancel[0]}" data-he="${COPY.cancel[1]}">${COPY.cancel[0]}</button>
        </div>
      </form>
      <div class="cal-table-wrap"></div>
      <div class="cal-actions">
        <button type="button" data-act="calculate" data-en="${COPY.calculate[0]}" data-he="${COPY.calculate[1]}">${COPY.calculate[0]}</button>
      </div>
      <div class="cal-result"></div>
      <label class="cal-check cal-north" hidden><input type="checkbox"><span></span></label>
      <label class="cal-check cal-box" hidden><input type="checkbox"><span data-en="${COPY.boxAck[0]}" data-he="${COPY.boxAck[1]}">${COPY.boxAck[0]}</span></label>
      <div class="cal-actions">
        <button type="button" data-act="copy-json" disabled data-en="${COPY.copyJson[0]}" data-he="${COPY.copyJson[1]}">${COPY.copyJson[0]}</button>
        <button type="button" data-act="copy-measures" data-en="${COPY.copyMeasures[0]}" data-he="${COPY.copyMeasures[1]}">${COPY.copyMeasures[0]}</button>
      </div>
      <p class="cal-copy-note"></p>
      <textarea class="cal-export" hidden readonly></textarea>
      <p class="cal-model" hidden></p>
    </div>
  `;
  viewer.element.appendChild(panel);
  panel.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      const session = current();
      if (session.mode === button.dataset.mode) return;
      session.mode = button.dataset.mode;
      closeEditor();
      refresh();
    });
  });
  panel.querySelector(".cal-form").addEventListener("submit", saveEditor);
  panel.querySelector('[data-act="cancel"]').addEventListener("click", () => {
    closeEditor();
    refresh();
  });
  panel.querySelector(".cal-table-wrap").addEventListener("click", onTableClick);
  panel.querySelector('[data-act="calculate"]').addEventListener("click", refresh);
  panel.querySelector(".cal-north input").addEventListener("change", (event) => {
    current().northReviewed = event.target.checked;
    refresh();
  });
  panel.querySelector(".cal-box input").addEventListener("change", (event) => {
    current().boxReviewed = event.target.checked;
    refresh();
  });
  panel.querySelector('[data-act="copy-json"]').addEventListener("click", () => {
    const report = assessment();
    const ctx = context();
    if (!report.exportReady || !ctx.key) return;
    copyText(JSON.stringify(calibrationObject(report, ctx.key), null, 2));
  });
  panel.querySelector('[data-act="copy-measures"]').addEventListener("click", () => {
    copyText(JSON.stringify(measurementObject(context()), null, 2));
  });
  panel.querySelector('[data-act="toggle"]').addEventListener("click", () => {
    const body = panel.querySelector(".cal-body");
    const hidden = !body.hidden;
    body.hidden = hidden;
    const button = panel.querySelector('[data-act="toggle"]');
    const pair = hidden ? COPY.show : COPY.hide;
    button.dataset.en = pair[0];
    button.dataset.he = pair[1];
    button.textContent = document.documentElement.lang === "he" ? pair[1] : pair[0];
  });
  const langWatch = new MutationObserver(() => refresh());
  langWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "class"] });
}

export function startCalibration(viewer) {
  viewerRef = viewer;
  import("three").then((THREE) => {
    drawPins.THREE = THREE;
    if (!built) {
      built = true;
      build(viewer);
    }
    window.ForumetroCalibration = { sync };
    sync(viewer);
  }).catch(() => {
    built = false;
  });
}

export function sync(nextViewer) {
  viewerRef = nextViewer || viewerRef;
  if (!viewerRef || typeof viewerRef.setOnSelect !== "function") return;
  viewerRef.setOnSelect(onHit);
  if (typeof viewerRef.onModelReady === "function" && !sync.ready) {
    sync.ready = true;
    viewerRef.onModelReady(() => {
      const readyKey = (context().key) || "";
      if (readyKey !== activeKey) {
        activeKey = readyKey;
        if (panel) closeEditor();
      }
      refresh();
    });
  }
  const ctx = context();
  const key = ctx.key || "";
  if (key !== activeKey) {
    activeKey = key;
    closeEditor();
  }
  refresh();
}
