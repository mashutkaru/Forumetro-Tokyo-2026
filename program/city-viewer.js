import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { createForumetroCompass } from "./forumetro-compass.js?v=1";

// Geographic north, clockwise from world -Z toward +X.
// Keys are the model path without the ?v= suffix.
// 0 means the urbanSCAN model is north-up: north is world -Z.
// Shibuya’s north-up map matches that same ground axis.
const VERIFIED_NORTH = new Map([
  ["models/Asakusa-city-model.glb", 0],
  ["models/Kita-city-model.glb", 0],
  ["models/Odaiba-satellite.glb", 0],
  ["models/Roppongi-city-model.glb", 0],
  ["models/Shibuya-city-model-complete.glb", 0],
  ["models/Shibuya-city-model.glb", 0],
  ["models/Shimokita-Senrogai-city-model.glb", 0],
  ["models/Shinbashi-Shiodome-city-model.glb", 0],
  ["models/Shinjuku-city-model.glb", 0],
  ["models/Takanawa-Gateway-city-model.glb", 0],
  ["models/Tokyo-Hibiya-Ginza.glb", 0],
  ["models/Toranomon-city-model.glb", 0],
]);
function northForUrl(url) {
  const path = new URL(url, document.baseURI).pathname;
  for (const [key, value] of VERIFIED_NORTH) {
    if (path.endsWith("/" + key)) return value;
  }
  return null;
}

const loader = new GLTFLoader();

function textFor(el) {
  const lang = document.documentElement.lang;
  if (lang === "ja") return el.dataset.ja || el.dataset.en || "";
  if (lang === "he") return el.dataset.he || el.dataset.en || "";
  return el.dataset.en || "";
}

function paintLabels(root) {
  root.querySelectorAll("[data-en]").forEach((el) => {
    const text = textFor(el);
    if (text) el.textContent = text;
  });
}

function create(mount) {
  const root = document.createElement("div");
  root.className = "city-viewer";
  root.innerHTML = `
    <div class="city-viewer-stage">
      <canvas aria-label="3D neighborhood model"></canvas>
      <div class="city-viewer-status" hidden>
        <p class="city-viewer-loading">
          <span data-en="Loading the neighborhood" data-ja="周辺のモデルを読み込んでいます" data-he="טוען את השכונה">Loading the neighborhood</span>
          <span class="city-viewer-pct"></span>
        </p>
        <span class="city-viewer-bar" aria-hidden="true"><span class="city-viewer-bar-fill"></span></span>
      </div>
      <div class="city-viewer-error" hidden>
        <p data-en="The 3D model could not be loaded. Check your connection and try again." data-ja="3Dモデルを読み込めませんでした。通信状況を確認して、もう一度お試しください。" data-he="לא ניתן לטעון את המודל. בדקו את החיבור ונסו שוב.">The 3D model could not be loaded. Check your connection and try again.</p>
        <button type="button" class="city-viewer-retry"><span data-en="Try again" data-ja="もう一度" data-he="נסו שוב">Try again</span></button>
      </div>
    </div>
    <div class="city-viewer-toolbar">
      <button type="button" data-action="reset"><span data-en="Reset view" data-ja="表示を戻す" data-he="איפוס תצוגה">Reset view</span></button>
      <button type="button" data-action="in"><span data-en="Zoom in" data-ja="拡大" data-he="התקרבות">Zoom in</span></button>
      <button type="button" data-action="out"><span data-en="Zoom out" data-ja="縮小" data-he="התרחקות">Zoom out</span></button>
      <button type="button" data-action="full"><span data-en="Fullscreen" data-ja="全画面" data-he="מסך מלא">Fullscreen</span></button>
    </div>
  `;
  mount.appendChild(root);
  paintLabels(root);

  const stage = root.querySelector(".city-viewer-stage");
  const canvas = stage.querySelector("canvas");
  const statusEl = root.querySelector(".city-viewer-status");
  const pctEl = root.querySelector(".city-viewer-pct");
  const fillEl = root.querySelector(".city-viewer-bar-fill");
  const errorEl = root.querySelector(".city-viewer-error");
  const fullSpan = root.querySelector('[data-action="full"] span');
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf4f6f8);

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100000);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobileQuery.matches,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setClearColor(0xf4f6f8, 1);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.7;
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0xffffff, 0xe7eef2, 0.35 * Math.PI));
  const key = new THREE.DirectionalLight(0xfff6ea, 0.9 * Math.PI);
  key.position.set(0.55, 1.45, 0.4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.28 * Math.PI);
  fill.position.set(-0.9, 0.55, -0.35);
  scene.add(fill);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.screenSpacePanning = true;
  controls.zoomToCursor = true;
  controls.zoomSpeed = 1.15;
  controls.panSpeed = 1.35;
  controls.rotateSpeed = 0.65;
  // Drag moves the model. Right-drag (or a two-finger twist) turns it.
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
  };
  controls.touches = {
    ONE: THREE.TOUCH.PAN,
    TWO: THREE.TOUCH.DOLLY_ROTATE,
  };

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let modelRoot = null;
  let home = null;
  let currentUrl = "";
  let loadToken = 0;
  let active = false;
  let visible = false;
  let frame = 0;
  let onSelect = null;
  let pointerDown = null;
  let needsFit = false;
  let panLimits = null;

  const compass = createForumetroCompass({
    THREE, stage, camera, controls, requestRender: kick,
    northDegrees: null
  });

  function clampPan() {
    if (!panLimits) return;
    const before = controls.target.clone();
    controls.target.clamp(panLimits.min, panLimits.max);
    const shift = controls.target.clone().sub(before);
    if (shift.lengthSq() > 0) camera.position.add(shift);
  }

  function shouldDraw() {
    return active && visible && !document.hidden && modelRoot;
  }

  function kick() {
    if (frame || !shouldDraw()) return;
    const loop = () => {
      if (!shouldDraw()) {
        frame = 0;
        return;
      }
      frame = window.requestAnimationFrame(loop);
      controls.update();
      clampPan();
      compass.update();
      renderer.render(scene, camera);
    };
    frame = window.requestAnimationFrame(loop);
  }

  function resize() {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    if (!width || !height) return;
    const cap = mobileQuery.matches ? 1.25 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (needsFit && modelRoot) {
      needsFit = false;
      frameModel(modelRoot);
      return;
    }
    kick();
  }

  function boundsOf(object) {
    const box = new THREE.Box3();
    object.updateMatrixWorld(true);
    object.traverse((child) => {
      if (!child.geometry) return;
      if (child.isInstancedMesh) child.computeBoundingBox();
      if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
      const piece = child.isInstancedMesh && child.boundingBox
        ? child.boundingBox.clone()
        : child.geometry.boundingBox.clone();
      piece.applyMatrix4(child.matrixWorld);
      box.union(piece);
    });
    return box;
  }

  function frameModel(object) {
    const box = boundsOf(object);
    if (box.isEmpty()) return;
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const radius = Math.max(size.x, size.y, size.z) * 0.5 || 1;
    const stageWidth = stage.clientWidth || 1;
    const stageHeight = stage.clientHeight || 1;
    camera.aspect = stageWidth / stageHeight;
    const vFov = (camera.fov * Math.PI) / 180;
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
    const distance = Math.max(radius / Math.sin(vFov / 2), radius / Math.sin(hFov / 2)) * 1.08;
    const direction = new THREE.Vector3(1, 0.85, 1).normalize();
    camera.near = Math.max(distance / 200, 0.01);
    camera.far = Math.max(distance * 20, 1000);
    camera.position.copy(center).addScaledVector(direction, distance);
    camera.lookAt(center);
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.minDistance = distance * 0.035;
    controls.maxDistance = distance * 4;
    panLimits = box.clone().expandByScalar(Math.max(size.x, size.y, size.z) * 0.08);
    controls.update();
    home = {
      position: camera.position.clone(),
      target: center.clone(),
      near: camera.near,
      far: camera.far,
    };
    kick();
  }

  function resetView() {
    if (!home) return;
    camera.position.copy(home.position);
    camera.near = home.near;
    camera.far = home.far;
    camera.updateProjectionMatrix();
    controls.target.copy(home.target);
    controls.update();
    kick();
  }

  function zoomBy(factor) {
    const offset = camera.position.clone().sub(controls.target);
    const next = THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance);
    offset.setLength(next);
    camera.position.copy(controls.target).add(offset);
    controls.update();
    kick();
  }

  function showProgress(percent) {
    errorEl.hidden = true;
    statusEl.hidden = false;
    const known = typeof percent === "number" && percent >= 0;
    fillEl.style.width = known ? `${percent}%` : "35%";
    pctEl.textContent = known ? ` ${percent}%` : "";
    paintLabels(statusEl);
  }

  function hideStatus() {
    statusEl.hidden = true;
  }

  function showError() {
    statusEl.hidden = true;
    errorEl.hidden = false;
    paintLabels(errorEl);
  }

  function clearModel() {
    if (!modelRoot) return;
    scene.remove(modelRoot);
    modelRoot.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (!obj.material) return;
      const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
      materials.forEach((material) => {
        Object.keys(material).forEach((key) => {
          const value = material[key];
          if (value && value.isTexture) value.dispose();
        });
        material.dispose();
      });
    });
    modelRoot = null;
    home = null;
    panLimits = null;
  }

  function load(url) {
    if (url === currentUrl && modelRoot) {
      kick();
      return;
    }
    currentUrl = url;
    compass.setNorthDegrees(northForUrl(url));
    const token = ++loadToken;
    showProgress(null);
    loader.load(
      url,
      (gltf) => {
        if (token !== loadToken) return;
        clearModel();
        modelRoot = gltf.scene;
        scene.add(modelRoot);
        hideStatus();
        needsFit = true;
        resize();
      },
      (event) => {
        if (token !== loadToken) return;
        if (event.total) showProgress(Math.min(100, Math.round((event.loaded / event.total) * 100)));
        else showProgress(null);
      },
      () => {
        if (token !== loadToken) return;
        currentUrl = "";
        showError();
      }
    );
  }

  function setActive(next) {
    active = Boolean(next);
    if (active) {
      resize();
      kick();
    }
  }

  function setOnSelect(handler) {
    onSelect = typeof handler === "function" ? handler : null;
  }

  function setFullscreenLabel(on) {
    if (on) {
      fullSpan.dataset.en = "Exit fullscreen";
      fullSpan.dataset.ja = "全画面を終了";
      fullSpan.dataset.he = "יציאה ממסך מלא";
    } else {
      fullSpan.dataset.en = "Fullscreen";
      fullSpan.dataset.ja = "全画面";
      fullSpan.dataset.he = "מסך מלא";
    }
    fullSpan.textContent = textFor(fullSpan);
  }

  root.querySelector('[data-action="reset"]').addEventListener("click", resetView);
  root.querySelector('[data-action="in"]').addEventListener("click", () => zoomBy(0.8));
  root.querySelector('[data-action="out"]').addEventListener("click", () => zoomBy(1.25));
  root.querySelector('[data-action="full"]').addEventListener("click", () => {
    if (document.fullscreenElement === root) document.exitFullscreen();
    else root.requestFullscreen().catch(() => {});
  });
  root.querySelector(".city-viewer-retry").addEventListener("click", () => {
    const retryUrl = root.dataset.src;
    if (retryUrl) load(retryUrl);
  });

  const wrappedLoad = (url) => {
    root.dataset.src = url;
    load(url);
  };

  stage.addEventListener("touchmove", (event) => event.preventDefault(), { passive: false });

  canvas.addEventListener("pointerdown", (event) => {
    pointerDown = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!pointerDown || !onSelect || !modelRoot) {
      pointerDown = null;
      return;
    }
    const dx = event.clientX - pointerDown.x;
    const dy = event.clientY - pointerDown.y;
    pointerDown = null;
    if (dx * dx + dy * dy > 16) return;
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(modelRoot, true);
    if (hits[0]) onSelect(hits[0]);
  });

  const observer = new ResizeObserver(resize);
  observer.observe(stage);
  const seen = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    kick();
  }, { threshold: 0.05 });
  seen.observe(root);
  document.addEventListener("visibilitychange", kick);
  document.addEventListener("fullscreenchange", () => {
    setFullscreenLabel(document.fullscreenElement === root);
    resize();
  });
  mobileQuery.addEventListener("change", resize);

  return {
    element: root,
    load: wrappedLoad,
    setActive,
    resize,
    refit() {
      needsFit = true;
      resize();
    },
    resetView,
    setOnSelect,
    setNorthDegrees: compass.setNorthDegrees,
  };
}

window.ForumetroCityViewer = { create };
window.dispatchEvent(new Event("forumetro:viewer-ready"));
