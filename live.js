/* L09 live link. The parent page keeps the only connection to Supabase,
   so a host phone and the visitors' phones share the same place on the site.
   The publishable key is meant to be in the website. The secret key is not. */
(function () {
  var SUPABASE_URL = "https://rrnruwohjenoblvpmsjy.supabase.co";
  var SUPABASE_KEY = "sb_publishable_4OtR2kNL_mw0tRreEaRXFw_pQ0JwxaB";
  var ORIGIN = window.location.origin;
  var TAB = Math.random().toString(36).slice(2, 10);
  var SECTIONS = { overview: 1, schedule: 1, location: 1, model: 1, tips: 1 };
  var LINES = { ginza: 1, hibiya: 1, yamanote: 1, oedo: 1, toyoko: 1, odakyu: 1, chiyoda: 1, asakusa: 1 };
  var SNAP_KEYS = { day: 1, section: 1, line: 1, model: 1, camera: 1, open: 1 };
  var CAMERA_KEYS = { position: 1, target: 1, fov: 1 };
  var FRAME_TYPES = {
    "forumetro:live-ready": 1,
    "forumetro:live-enter": 1,
    "forumetro:live-leave": 1,
    "forumetro:live-present": 1,
    "forumetro:live-stop": 1,
    "forumetro:live-state": 1,
    "forumetro:live-resume": 1,
    "forumetro:live-pointer": 1
  };

  var channel = null;
  var role = "idle";
  var following = false;
  var generation = 0;
  var seq = 0;
  var latest = null;
  var latestPresenter = "";
  var lastHeard = 0;
  var frameReady = false;
  var heartbeat = 0;
  var outgoing = [];
  var joined = false;
  var opening = false;
  var pending = [];

  function frameEl() {
    return document.querySelector("#program-page .program-frame");
  }

  function frameWindow() {
    var el = frameEl();
    return el ? el.contentWindow : null;
  }

  function onlyKeys(obj, allowed) {
    if (!obj || typeof obj !== "object") return false;
    var keys = Object.keys(obj);
    var i;
    if (keys.length > Object.keys(allowed).length) return false;
    for (i = 0; i < keys.length; i++) if (!allowed[keys[i]]) return false;
    return true;
  }

  function finiteTriple(value) {
    return Array.isArray(value) && value.length === 3 && value.every(function (n) {
      return typeof n === "number" && isFinite(n) && Math.abs(n) < 1e7;
    });
  }

  function validOpen(value) {
    var seen;
    var i;
    var n;
    if (value == null) return true;
    if (!Array.isArray(value) || value.length > 40) return false;
    seen = {};
    for (i = 0; i < value.length; i++) {
      n = value[i];
      if (typeof n !== "number" || n !== Math.floor(n) || n < 0 || n > 60 || seen[n]) return false;
      seen[n] = 1;
    }
    return true;
  }

  function validSnapshot(snapshot) {
    if (!onlyKeys(snapshot, SNAP_KEYS)) return false;
    if (typeof snapshot.day !== "string" || !/^\d{2}\.\d{2}$/.test(snapshot.day)) return false;
    if (!SECTIONS[snapshot.section]) return false;
    if (!(snapshot.line === null || LINES[snapshot.line])) return false;
    if (!(snapshot.model === null || (typeof snapshot.model === "string" && /^models\/[A-Za-z0-9._-]+\.glb$/.test(snapshot.model)))) return false;
    if (snapshot.camera !== null) {
      if (!onlyKeys(snapshot.camera, CAMERA_KEYS)) return false;
      if (!finiteTriple(snapshot.camera.position) || !finiteTriple(snapshot.camera.target)) return false;
      if (typeof snapshot.camera.fov !== "number" || snapshot.camera.fov < 10 || snapshot.camera.fov > 120) return false;
    }
    if (!validOpen(snapshot.open)) return false;
    return true;
  }

  function send(data) {
    var win = frameWindow();
    if (!frameReady || !win) {
      outgoing.push(data);
      return;
    }
    try { win.postMessage(data, ORIGIN); } catch (e) {}
  }

  function flush() {
    var win = frameWindow();
    var queued = outgoing;
    outgoing = [];
    frameReady = true;
    if (!win) return;
    queued.forEach(function (data) {
      try { win.postMessage(data, ORIGIN); } catch (e) {}
    });
  }

  function openChannel() {
    if (channel || opening) return;
    opening = true;
    import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm").then(function (mod) {
      var client = mod.createClient(SUPABASE_URL, SUPABASE_KEY);
      channel = client.channel("forumetro-l09", {
        config: { broadcast: { self: false } }
      });
      channel.on("broadcast", { event: "live" }, function (payload) {
        onAir({ data: payload && payload.payload });
      });
      channel.subscribe(function (status) {
        if (status === "SUBSCRIBED") {
          joined = true;
          var queued = pending;
          pending = [];
          queued.forEach(sendNow);
          return;
        }
        if (status === "CHANNEL_ERROR" || status === "TIMED_OUT" || status === "CLOSED") {
          joined = false;
          if (following) send({ type: "forumetro:live-status", status: "reconnecting" });
        }
      });
    }).catch(function () {
      opening = false;
      if (following) send({ type: "forumetro:live-status", status: "reconnecting" });
    });
  }

  function sendNow(msg) {
    if (!channel || !joined) return;
    channel.send({ type: "broadcast", event: "live", payload: msg }).catch(function () {
      if (following) send({ type: "forumetro:live-status", status: "reconnecting" });
    });
  }

  function pointValue(x, y) {
    if (x === null && y === null) return true;
    return typeof x === "number" && typeof y === "number"
      && isFinite(x) && isFinite(y)
      && x >= 0 && x <= 1 && y >= 0 && y <= 1;
  }

  function broadcast(msg) {
    openChannel();
    if (!joined) {
      if (msg.kind === "pointer") {
        pending = pending.filter(function (item) { return item.kind !== "pointer"; });
      }
      pending.push(msg);
      return;
    }
    sendNow(msg);
  }

  function remember(status, snapshot) {
    seq += 1;
    latest = {
      generation: generation,
      seq: seq,
      status: status,
      snapshot: snapshot || (latest && latest.snapshot) || null
    };
    lastHeard = Date.now();
    return latest;
  }

  function publish(status, snapshot, settled) {
    var stored = remember(status, snapshot);
    broadcast({
      kind: "state",
      presenterId: TAB,
      generation: stored.generation,
      seq: stored.seq,
      status: stored.status,
      settled: Boolean(settled),
      snapshot: stored.snapshot
    });
  }

  function sendApply() {
    if (!following) return;
    if (!latest || !latest.snapshot) {
      send({ type: "forumetro:live-status", status: "waiting" });
      return;
    }
    send({
      type: "forumetro:live-apply",
      generation: latest.generation,
      seq: latest.seq,
      status: latest.status,
      snapshot: latest.snapshot
    });
  }

  function stopHeartbeat() {
    if (heartbeat) window.clearInterval(heartbeat);
    heartbeat = 0;
  }

  function startHeartbeat() {
    stopHeartbeat();
    heartbeat = window.setInterval(function () {
      if (role !== "presenter") return;
      lastHeard = Date.now();
      broadcast({
        kind: "heartbeat",
        presenterId: TAB,
        generation: generation,
        seq: seq,
        status: "live"
      });
    }, 3000);
  }

  function stopPresenter(tellOthers) {
    stopHeartbeat();
    if (tellOthers && latest && latest.snapshot) publish("ended", latest.snapshot, true);
    if (tellOthers) {
      broadcast({ kind: "pointer", presenterId: TAB, generation: generation, x: null, y: null });
    }
    role = following ? "viewer" : "idle";
  }

  function onAir(event) {
    var msg = event.data;
    if (!msg || (msg.kind !== "hello" && msg.kind !== "heartbeat" && msg.kind !== "state" && msg.kind !== "pointer")) return;
    if (msg.kind === "pointer") {
      if (!following || role === "presenter") return;
      if (typeof msg.presenterId !== "string" || typeof msg.generation !== "number") return;
      if (msg.presenterId === TAB || msg.presenterId !== latestPresenter) return;
      if (!latest || msg.generation !== latest.generation) return;
      if (!pointValue(msg.x, msg.y)) return;
      send({ type: "forumetro:live-pointer", x: msg.x, y: msg.y });
      return;
    }
    if (typeof msg.presenterId !== "string" || typeof msg.generation !== "number" || typeof msg.seq !== "number") return;
    if (msg.kind === "hello") {
      if (role === "presenter" && latest && latest.snapshot) publish("live", latest.snapshot, true);
      return;
    }
    if (role === "presenter" && msg.presenterId !== TAB && msg.generation > generation) {
      stopPresenter(false);
      send({ type: "forumetro:live-role", role: "viewer", notice: "taken-over" });
    }
    if (msg.presenterId === TAB) return;
    if (latest && msg.generation < latest.generation) return;
    if (latest && msg.generation === latest.generation && msg.kind === "state" && msg.seq < latest.seq) return;
    lastHeard = Date.now();
    latestPresenter = msg.presenterId;
    if (msg.kind === "heartbeat") {
      if (following && role === "viewer") send({ type: "forumetro:live-status", status: "live" });
      return;
    }
    if (msg.kind === "state" && validSnapshot(msg.snapshot)) {
      latest = {
        generation: msg.generation,
        seq: msg.seq,
        status: msg.status === "ended" ? "ended" : "live",
        snapshot: msg.snapshot
      };
      generation = msg.generation;
      seq = msg.seq;
      if (following && role !== "presenter") sendApply();
    }
  }

  function onFrame(data) {
    if (data.type === "forumetro:live-ready") {
      flush();
      if (following) {
        send({ type: "forumetro:live-role", role: role === "presenter" ? "presenter" : "viewer" });
        sendApply();
      }
      return;
    }
    if (data.type === "forumetro:live-enter") {
      following = true;
      if (role !== "presenter") role = "viewer";
      openChannel();
      send({ type: "forumetro:live-role", role: role === "presenter" ? "presenter" : "viewer" });
      sendApply();
      if (role !== "presenter") broadcast({ kind: "hello", presenterId: TAB, generation: generation, seq: seq });
      return;
    }
    if (data.type === "forumetro:live-resume") {
      if (role === "presenter") return;
      openChannel();
      broadcast({ kind: "hello", presenterId: TAB, generation: generation, seq: seq });
      if (!navigator.onLine) send({ type: "forumetro:live-status", status: "reconnecting" });
      else sendApply();
      return;
    }
    if (data.type === "forumetro:live-pointer") {
      if (role !== "presenter") return;
      if (!onlyKeys(data, { type: 1, x: 1, y: 1 }) || !pointValue(data.x, data.y)) return;
      broadcast({
        kind: "pointer",
        presenterId: TAB,
        generation: generation,
        x: data.x,
        y: data.y
      });
      return;
    }
    if (data.type === "forumetro:live-present") {
      if (!validSnapshot(data.snapshot)) return;
      if (!window.ForumetroLiveHosts || !window.ForumetroLiveHosts.allows(data.phone)) return;
      following = true;
      role = "presenter";
      generation = Date.now();
      seq = 0;
      latest = null;
      latestPresenter = TAB;
      openChannel();
      publish("live", data.snapshot, true);
      send({ type: "forumetro:live-role", role: "presenter" });
      startHeartbeat();
      return;
    }
    if (data.type === "forumetro:live-state") {
      if (role !== "presenter" || !validSnapshot(data.snapshot)) return;
      publish("live", data.snapshot, data.settled);
      return;
    }
    if (data.type === "forumetro:live-stop") {
      if (role === "presenter") stopPresenter(true);
      send({ type: "forumetro:live-status", status: "ended" });
      send({ type: "forumetro:live-role", role: "viewer" });
      return;
    }
    if (data.type === "forumetro:live-leave") {
      if (role === "presenter") stopPresenter(true);
      following = false;
      role = "idle";
    }
  }

  window.addEventListener("message", function (event) {
    if (!event || event.origin !== ORIGIN || !event.data || !FRAME_TYPES[event.data.type]) return;
    if (event.source !== frameWindow()) return;
    onFrame(event.data);
  });

  window.addEventListener("offline", function () {
    if (following) send({ type: "forumetro:live-status", status: "reconnecting" });
  });
  window.addEventListener("online", function () {
    if (following && role !== "presenter") {
      broadcast({ kind: "hello", presenterId: TAB, generation: generation, seq: seq });
    }
  });
  window.setInterval(function () {
    if (role === "viewer" && latest && latest.status === "live" && lastHeard && Date.now() - lastHeard > 8000) {
      send({ type: "forumetro:live-status", status: "disconnected" });
    }
  }, 1000);
})();
