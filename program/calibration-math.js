// Pure checks for the temporary calibration panel.
// No network, no storage, and no invented coordinates.

function finite(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function wrap360(degrees) {
  return ((degrees % 360) + 360) % 360;
}

export function smallestAngleDelta(a, b) {
  if (!finite(a) || !finite(b)) return null;
  let delta = wrap360(a) - wrap360(b);
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return delta;
}

export function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

// The first point becomes the anchor. Scale is real meters per model unit.
// measuredNorth is the rotation that lines this pair up, in the same
// sense as the compass: clockwise from world -Z toward +X.
export function solvePair(a, b) {
  if (!a || !b) return null;
  if (!finite(a.x) || !finite(a.z) || !finite(b.x) || !finite(b.z)) return null;
  if (!finite(a.lat) || !finite(a.lon) || !finite(b.lat) || !finite(b.lon)) return null;
  const worldDistance = Math.hypot(b.x - a.x, b.z - a.z);
  const meters = haversineMeters(a.lat, a.lon, b.lat, b.lon);
  if (worldDistance < 1e-4 || meters < 1) return null;
  const east = (b.lon - a.lon) * 111320 * Math.cos((a.lat * Math.PI) / 180);
  const north = (b.lat - a.lat) * 110540;
  const bearing = (Math.atan2(east, north) * 180) / Math.PI;
  const modelAngle = (Math.atan2(b.x - a.x, -(b.z - a.z)) * 180) / Math.PI;
  return {
    anchorWorld: { x: a.x, z: a.z },
    anchorGeo: { lat: a.lat, lon: a.lon },
    metersPerUnit: meters / worldDistance,
    measuredNorth: modelAngle - bearing,
    bearing,
    modelAngle,
  };
}

export function pointErrorMeters(predicted, point, metersPerUnit) {
  if (!predicted || !point || !(metersPerUnit > 0)) return null;
  if (!finite(predicted.x) || !finite(predicted.z) || !finite(point.x) || !finite(point.z)) return null;
  return Math.hypot(point.x - predicted.x, point.z - predicted.z) * metersPerUnit;
}

export function errorBand(meters) {
  if (!finite(meters)) return null;
  if (meters <= 5) return "good";
  if (meters <= 10) return "warn";
  return "bad";
}

function localMeters(origin, point) {
  const lat0 = (origin.lat * Math.PI) / 180;
  return {
    e: (point.lon - origin.lon) * 111320 * Math.cos(lat0),
    n: (point.lat - origin.lat) * 110540,
  };
}

function cross(ax, ay, bx, by) {
  return ax * by - ay * bx;
}

function segmentsCross(a, b, c, d) {
  const abx = b.e - a.e;
  const aby = b.n - a.n;
  const acx = c.e - a.e;
  const acy = c.n - a.n;
  const adx = d.e - a.e;
  const ady = d.n - a.n;
  const cdx = d.e - c.e;
  const cdy = d.n - c.n;
  const cax = a.e - c.e;
  const cay = a.n - c.n;
  const cbx = b.e - c.e;
  const cby = b.n - c.n;
  const abAc = cross(abx, aby, acx, acy);
  const abAd = cross(abx, aby, adx, ady);
  const cdCa = cross(cdx, cdy, cax, cay);
  const cdCb = cross(cdx, cdy, cbx, cby);
  const eps = 1e-6;
  if (Math.abs(abAc) < eps && Math.abs(abAd) < eps) {
    const dots = [0, abx * abx + aby * aby].sort((p, q) => p - q);
    const cDot = acx * abx + acy * aby;
    const dDot = adx * abx + ady * aby;
    const lo = Math.min(cDot, dDot);
    const hi = Math.max(cDot, dDot);
    return hi > dots[0] + eps && lo < dots[1] - eps;
  }
  return abAc * abAd < 0 && cdCa * cdCb < 0;
}

function looksLikeFootprintBox(points, footprint) {
  if (!footprint || points.length < 4) return false;
  const width = footprint.maxX - footprint.minX;
  const depth = footprint.maxZ - footprint.minZ;
  if (!(width > 0) || !(depth > 0)) return false;
  const tol = 0.02 * Math.min(width, depth);
  const onEdge = points.every((point) => {
    const insideX = point.x >= footprint.minX - tol && point.x <= footprint.maxX + tol;
    const insideZ = point.z >= footprint.minZ - tol && point.z <= footprint.maxZ + tol;
    if (!insideX || !insideZ) return false;
    const edge = Math.min(
      Math.abs(point.x - footprint.minX),
      Math.abs(point.x - footprint.maxX),
      Math.abs(point.z - footprint.minZ),
      Math.abs(point.z - footprint.maxZ)
    );
    return edge <= tol;
  });
  if (!onEdge) return false;
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    area += a.x * b.z - b.x * a.z;
  }
  area = Math.abs(area) / 2;
  return area / (width * depth) > 0.85;
}

// issues codes: few, invalid, duplicate, cross, transform.
// looksLikeBox is separate so the developer can confirm a real rectangular street edge.
export function inspectBoundary(vertices, predict, footprint) {
  const issues = [];
  if (!Array.isArray(vertices) || vertices.length < 3) {
    return { issues: ["few"], maxTransformM: null, looksLikeBox: false };
  }
  const valid = vertices.every((point) => finite(point.lat) && finite(point.lon)
    && point.lat >= -90 && point.lat <= 90
    && point.lon >= -180 && point.lon <= 180
    && finite(point.x) && finite(point.z));
  if (!valid) issues.push("invalid");
  if (valid) {
    const origin = vertices[0];
    const local = vertices.map((point) => localMeters(origin, point));
    for (let i = 0; i < local.length; i++) {
      for (let j = i + 1; j < local.length; j++) {
        const apart = Math.hypot(local[i].e - local[j].e, local[i].n - local[j].n);
        if (apart < 1) issues.push("duplicate");
      }
    }
    if (!issues.includes("duplicate")) {
      for (let i = 0; i < local.length; i++) {
        for (let j = i + 1; j < local.length; j++) {
          const adjacent = j === i + 1 || (i === 0 && j === local.length - 1);
          if (adjacent) continue;
          const a = local[i];
          const b = local[(i + 1) % local.length];
          const c = local[j];
          const d = local[(j + 1) % local.length];
          if (segmentsCross(a, b, c, d)) issues.push("cross");
        }
      }
    }
  }
  let maxTransformM = null;
  if (valid && typeof predict === "function") {
    vertices.forEach((point) => {
      const predicted = predict(point);
      const meters = pointErrorMeters(predicted && predicted.world, point, predicted && predicted.metersPerUnit);
      if (meters == null) {
        issues.push("transform");
        return;
      }
      if (maxTransformM == null || meters > maxTransformM) maxTransformM = meters;
    });
  }
  return {
    issues: [...new Set(issues)],
    maxTransformM,
    looksLikeBox: valid && looksLikeFootprintBox(vertices, footprint),
  };
}
