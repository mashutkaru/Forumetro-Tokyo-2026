// Geographic calibration for the 3D neighborhood models.
//
// The GLB files are not georeferenced. Their origin and unit size are
// arbitrary and differ per file. VERIFIED_NORTH in city-viewer.js only
// turns the compass. It does not give a position or a scale. Do not invent,
// guess, or approximate any latitude, longitude, meters-per-unit, or
// coverage polygon. Leave an entry empty until the procedure below has
// been done on that exact model.
//
// Keys match VERIFIED_NORTH and modelKey() in app.js: the model path
// without the ?v= suffix, for example "models/Shinjuku-city-model.glb".
//
// northDegrees, once you fill it in, must be the same number as
// VERIFIED_NORTH for that same key. The conversion below applies that
// rotation once. The compass reads VERIFIED_NORTH on its own and must
// not be used to rotate the marker again. If the two numbers ever
// disagree, the marker stays hidden on purpose.
//
// Replace uncalibrated() with a real object only after the check passes:
//
//   {
//     anchorWorld: { x, z },          // world x,z of one known point (y is ignored)
//     anchorGeo: { lat, lon },        // WGS84 of that same point
//     metersPerUnit: number,          // real meters per one world unit on the ground
//     northDegrees: number,           // identical to VERIFIED_NORTH for this key
//     coverage: [ { lat, lon }, ... ] // ordered ring of the real modeled streets
//   }
//
// Calibration procedure
//
// 1. Open the program page with ?calibrate=1, for example
//    /program/?calibrate=1. Click landmarks on the model and type the
//    latitude and longitude from a map. The panel keeps those
//    measurements in memory only. Copy the JSON when the checks pass,
//    and paste it here only after that result has been reviewed.
//
// 2. Read the real WGS84 latitude and longitude of those same corners
//    from a map. Do not estimate them from the model.
//
// 3. Solve the scale from one pair of points.
//    World ground distance (ignore height):
//      worldDistance = Math.hypot(x2 - x1, z2 - z1)
//    Real distance, in meters, with the haversine formula
//    (R = 6371000, angles in radians):
//      dLat = (lat2 - lat1) * π / 180
//      dLon = (lon2 - lon1) * π / 180
//      a = sin(dLat / 2)² + cos(lat1) * cos(lat2) * sin(dLon / 2)²
//      meters = 2 * R * asin(sqrt(a))
//    metersPerUnit = meters / worldDistance
//    It is real meters per one model unit. The live conversion divides
//    meter offsets by this number. It never multiplies them.
//    anchorWorld and anchorGeo are either of the two points.
//
//    Cross-check rotation against VERIFIED_NORTH. Do not invent a new
//    angle to force a fit. Geographic bearing, clockwise from north:
//      east  = (lon2 - lon1) * 111320 * cos(lat1 in radians)
//      north = (lat2 - lat1) * 110540
//      bearing = atan2(east, north) in degrees
//    The same direction in the model, clockwise from world -Z:
//      modelAngle = atan2(x2 - x1, -(z2 - z1)) in degrees
//    modelAngle - bearing should match VERIFIED_NORTH (currently 0 for
//    every key: north is world -Z, east is world +X). If it does not,
//    the taps or the map points are wrong, or the compass value needs
//    a real correction. Fix that before filling the entry, then put the
//    same number in both places.
//
// 4. Sanity check with a third landmark that was not used to solve the
//    scale. Convert its lat/lon with wgs84ToWorld and compare to the
//    logged world x,z:
//      missMeters = Math.hypot(xLogged - xConverted, zLogged - zConverted) * metersPerUnit
//    Fill the entry only if that miss is a few meters.
//    Then trace coverage: an ordered ring of real WGS84 corners around
//    the streets and blocks that are actually in the GLB. Either ring
//    direction is fine. Do not use the model's bounding box. A box
//    includes empty corners where the model has no streets, and the
//    marker would appear there.

function uncalibrated() {
  return {
    anchorWorld: { x: null, z: null },
    anchorGeo: { lat: null, lon: null },
    metersPerUnit: null,
    northDegrees: null,
    coverage: [],
  };
}

export const MODEL_GEO = {
  "models/Asakusa-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Kita-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Odaiba-satellite.glb": uncalibrated(), // TODO(calibrate)
  "models/Roppongi-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Shibuya-city-model-complete.glb": uncalibrated(), // TODO(calibrate)
  "models/Shibuya-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Shimokita-Senrogai-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Shinbashi-Shiodome-city-model.glb": {
    anchorWorld: { x: -416.8324279785156, z: 345.3351745605469 },
    anchorGeo: { lat: 35.6618992, lon: 139.7559311 },
    metersPerUnit: 0.9998224306333818,
    northDegrees: 0,
    coverage: [
      { lat: 35.664943089059, lon: 139.75418262659127 },
      { lat: 35.664433320165244, lon: 139.75421323432238 },
      { lat: 35.66392846061502, lon: 139.75430476244327 },
      { lat: 35.66343337254262, lon: 139.75445632944835 },
      { lat: 35.66295282400906, lon: 139.75466647684647 },
      { lat: 35.66249144255201, lon: 139.75493317936792 },
      { lat: 35.66205367201426, lon: 139.75525386866804 },
      { lat: 35.66164372787095, lon: 139.7556254572417 },
      { lat: 35.66126555869956, lon: 139.75604436541695 },
      { lat: 35.66092280563104, lon: 139.7565065593987 },
      { lat: 35.660618770738985, lon: 139.7570075884271 },
      { lat: 35.66035638085626, lon: 139.75754262657514 },
      { lat: 35.66013816402214, lon: 139.7581065217588 },
      { lat: 35.659966220494255, lon: 139.7586938425538 },
      { lat: 35.65984220756425, lon: 139.75929893332122 },
      { lat: 35.65976731899013, lon: 139.75991596701365 },
      { lat: 35.65974227547152, lon: 139.76053900068047 },
      { lat: 35.65976731899013, lon: 139.76116203434725 },
      { lat: 35.65984220756425, lon: 139.76177906736484 },
      { lat: 35.659966220494255, lon: 139.7623841584697 },
      { lat: 35.66013816402214, lon: 139.76297147909597 },
      { lat: 35.66035638085626, lon: 139.76353537478576 },
      { lat: 35.660618770738985, lon: 139.7640704124277 },
      { lat: 35.66092280563104, lon: 139.76457144166696 },
      { lat: 35.66126555869956, lon: 139.76503363607048 },
      { lat: 35.66164372787095, lon: 139.7654525437396 },
      { lat: 35.66205367201426, lon: 139.76582413252416 },
      { lat: 35.66249144255201, lon: 139.76614482173994 },
      { lat: 35.66295282400906, lon: 139.7664115240083 },
      { lat: 35.66343337254262, lon: 139.76662167157514 },
      { lat: 35.66392846061502, lon: 139.7667732385802 },
      { lat: 35.664433320165244, lon: 139.7668647667011 },
      { lat: 35.664943089059, lon: 139.76689537460092 },
      { lat: 35.66545285767668, lon: 139.7668647667011 },
      { lat: 35.66595771736495, lon: 139.7667732385802 },
      { lat: 35.66645280557538, lon: 139.76662167157514 },
      { lat: 35.666933354177964, lon: 139.7664115240083 },
      { lat: 35.667394735013836, lon: 139.76614482173994 },
      { lat: 35.66783250627629, lon: 139.76582413252416 },
      { lat: 35.66824245005725, lon: 139.7654525437396 },
      { lat: 35.668620619556485, lon: 139.76503363607048 },
      { lat: 35.66896337221089, lon: 139.76457144166696 },
      { lat: 35.66926740724098, lon: 139.7640704124277 },
      { lat: 35.66952979712371, lon: 139.76353537478576 },
      { lat: 35.66974801409586, lon: 139.76297147909597 },
      { lat: 35.669919957209636, lon: 139.7623841584697 },
      { lat: 35.6700439700016, lon: 139.76177906736484 },
      { lat: 35.67011885871376, lon: 139.76116203434725 },
      { lat: 35.67014390223237, lon: 139.76053900068047 },
      { lat: 35.67011885871376, lon: 139.75991596701365 },
      { lat: 35.6700439700016, lon: 139.75929893332122 },
      { lat: 35.669919957209636, lon: 139.7586938425538 },
      { lat: 35.66974801409586, lon: 139.7581065217588 },
      { lat: 35.66952979712371, lon: 139.75754262657514 },
      { lat: 35.66926740724098, lon: 139.7570075884271 },
      { lat: 35.66896337221089, lon: 139.7565065593987 },
      { lat: 35.668620619556485, lon: 139.75604436541695 },
      { lat: 35.66824245005725, lon: 139.7556254572417 },
      { lat: 35.66783250627629, lon: 139.75525386866804 },
      { lat: 35.667394735013836, lon: 139.75493317936792 },
      { lat: 35.666933354177964, lon: 139.75466647684647 },
      { lat: 35.66645280557538, lon: 139.75445632944835 },
      { lat: 35.66595771736495, lon: 139.75430476244327 },
      { lat: 35.66545285767668, lon: 139.75421323432238 },
    ],
  },
  "models/Shinjuku-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Takanawa-Gateway-city-model.glb": uncalibrated(), // TODO(calibrate)
  "models/Tokyo-Hibiya-Ginza.glb": uncalibrated(), // TODO(calibrate)
  "models/Toranomon-city-model-complete.glb": {
    anchorWorld: { x: 329.03486571686847, z: 297.6612592554746 },
    anchorGeo: { lat: 35.665956391810354, lon: 139.74965341903732 },
    metersPerUnit: 1.0058382080318735,
    northDegrees: 0,
    coverage: [
      { lat: 35.668441664088306, lon: 139.7404398880061 },
      { lat: 35.66821896077859, lon: 139.74045996656182 },
      { lat: 35.66799733184776, lon: 139.74049337730835 },
      { lat: 35.667777311118265, lon: 139.74054003946722 },
      { lat: 35.66755942866378, lon: 139.74059984069515 },
      { lat: 35.66734420945542, lon: 139.7406726370842 },
      { lat: 35.66713217179977, lon: 139.74075825282225 },
      { lat: 35.66692382671409, lon: 139.7408564822295 },
      { lat: 35.6667196761213, lon: 139.7409670880615 },
      { lat: 35.666520211669855, lon: 139.74108980456361 },
      { lat: 35.66632591403946, lon: 139.74122433543482 },
      { lat: 35.6661372509973, lon: 139.74137035722154 },
      { lat: 35.66595467767572, lon: 139.74152751762082 },
      { lat: 35.66577863310108, lon: 139.74169543819542 },
      { lat: 35.66560954213759, lon: 139.74187371437387 },
      { lat: 35.665447811599705, lon: 139.74206191646869 },
      { lat: 35.665293831640525, lon: 139.74225959171284 },
      { lat: 35.66514797269721, lon: 139.74246626324148 },
      { lat: 35.665010586324094, lon: 139.74268143382542 },
      { lat: 35.66488200352649, lon: 139.74290458417408 },
      { lat: 35.6647625339277, lon: 139.7431351776873 },
      { lat: 35.664652465768924, lon: 139.74337265807924 },
      { lat: 35.66455206368782, lon: 139.74361645362123 },
      { lat: 35.664461570106916, lon: 139.74386597680223 },
      { lat: 35.66438120245673, lon: 139.74412062670459 },
      { lat: 35.6643111548419, lon: 139.74437978985273 },
      { lat: 35.66425159554197, lon: 139.74464284165555 },
      { lat: 35.664202668399874, lon: 139.7449091486125 },
      { lat: 35.66416449115575, lon: 139.7451780690773 },
      { lat: 35.66413715572469, lon: 139.74544895516715 },
      { lat: 35.66412072819667, lon: 139.7457211544172 },
      { lat: 35.66411524800353, lon: 139.7459940109686 },
      { lat: 35.66412072819667, lon: 139.74626686752 },
      { lat: 35.66413715572469, lon: 139.74653906677005 },
      { lat: 35.66416449115575, lon: 139.7468099528599 },
      { lat: 35.664202668399874, lon: 139.7470788733247 },
      { lat: 35.66425159554197, lon: 139.74734518028166 },
      { lat: 35.6643111548419, lon: 139.74760823208447 },
      { lat: 35.66438120245673, lon: 139.74786739523262 },
      { lat: 35.664461570106916, lon: 139.74812204513498 },
      { lat: 35.66455206368782, lon: 139.74837156831597 },
      { lat: 35.664652465768924, lon: 139.74861536385797 },
      { lat: 35.6647625339277, lon: 139.7488528442499 },
      { lat: 35.66488200352649, lon: 139.74908343776312 },
      { lat: 35.665010586324094, lon: 139.74930658811178 },
      { lat: 35.66514797269721, lon: 139.74952175869572 },
      { lat: 35.665293831640525, lon: 139.74972843022437 },
      { lat: 35.665447811599705, lon: 139.74992610546852 },
      { lat: 35.66560954213759, lon: 139.75011430756334 },
      { lat: 35.66577863310108, lon: 139.75029258374178 },
      { lat: 35.66595467767572, lon: 139.75046050431638 },
      { lat: 35.6661372509973, lon: 139.75061766471566 },
      { lat: 35.66632591403946, lon: 139.75076368650238 },
      { lat: 35.666520211669855, lon: 139.7508982173736 },
      { lat: 35.6667196761213, lon: 139.7510209338757 },
      { lat: 35.66692382671409, lon: 139.7511315397077 },
      { lat: 35.66713217179977, lon: 139.75122976911496 },
      { lat: 35.66734420945542, lon: 139.751315384853 },
      { lat: 35.66755942866378, lon: 139.75138818124205 },
      { lat: 35.667777311118265, lon: 139.75144798246998 },
      { lat: 35.66799733184776, lon: 139.75149464462885 },
      { lat: 35.66821896077859, lon: 139.7515280553754 },
      { lat: 35.668441664088306, lon: 139.7515481339311 },
      { lat: 35.66866490517755, lon: 139.75155483210034 },
      { lat: 35.668888146266795, lon: 139.7515481339311 },
      { lat: 35.66911084957651, lon: 139.7515280553754 },
      { lat: 35.66933247850735, lon: 139.75149464462885 },
      { lat: 35.669552499236836, lon: 139.75144798246998 },
      { lat: 35.66977038169132, lon: 139.75138818124205 },
      { lat: 35.669985600899686, lon: 139.751315384853 },
      { lat: 35.67019763855533, lon: 139.75122976911496 },
      { lat: 35.67040598364101, lon: 139.7511315397077 },
      { lat: 35.6706101342338, lon: 139.7510209338757 },
      { lat: 35.67080959868525, lon: 139.7508982173736 },
      { lat: 35.671003896315646, lon: 139.75076368650238 },
      { lat: 35.6711925593578, lon: 139.75061766471566 },
      { lat: 35.67137513267939, lon: 139.75046050431638 },
      { lat: 35.67155117725403, lon: 139.75029258374178 },
      { lat: 35.67172026821751, lon: 139.75011430756334 },
      { lat: 35.671881998755396, lon: 139.74992610546852 },
      { lat: 35.67203597871458, lon: 139.74972843022437 },
      { lat: 35.672181837657895, lon: 139.74952175869572 },
      { lat: 35.672319224031014, lon: 139.74930658811178 },
      { lat: 35.67244780682861, lon: 139.74908343776312 },
      { lat: 35.6725672764274, lon: 139.7488528442499 },
      { lat: 35.67267734458618, lon: 139.74861536385797 },
      { lat: 35.672777746667286, lon: 139.74837156831597 },
      { lat: 35.672868240248185, lon: 139.74812204513498 },
      { lat: 35.67294860789838, lon: 139.74786739523262 },
      { lat: 35.67301865551321, lon: 139.74760823208447 },
      { lat: 35.67307821481314, lon: 139.74734518028166 },
      { lat: 35.673127141955234, lon: 139.7470788733247 },
      { lat: 35.67316531919935, lon: 139.7468099528599 },
      { lat: 35.67319265463041, lon: 139.74653906677005 },
      { lat: 35.673209082158436, lon: 139.74626686752 },
      { lat: 35.67321456235157, lon: 139.7459940109686 },
      { lat: 35.673209082158436, lon: 139.7457211544172 },
      { lat: 35.67319265463041, lon: 139.74544895516715 },
      { lat: 35.67316531919935, lon: 139.7451780690773 },
      { lat: 35.673127141955234, lon: 139.7449091486125 },
      { lat: 35.67307821481314, lon: 139.74464284165555 },
      { lat: 35.67301865551321, lon: 139.74437978985273 },
      { lat: 35.67294860789838, lon: 139.74412062670459 },
      { lat: 35.672868240248185, lon: 139.74386597680223 },
      { lat: 35.672777746667286, lon: 139.74361645362123 },
      { lat: 35.67267734458618, lon: 139.74337265807924 },
      { lat: 35.6725672764274, lon: 139.7431351776873 },
      { lat: 35.67244780682861, lon: 139.74290458417408 },
      { lat: 35.672319224031014, lon: 139.74268143382542 },
      { lat: 35.672181837657895, lon: 139.74246626324148 },
      { lat: 35.67203597871458, lon: 139.74225959171284 },
      { lat: 35.671881998755396, lon: 139.74206191646869 },
      { lat: 35.67172026821751, lon: 139.74187371437387 },
      { lat: 35.67155117725403, lon: 139.74169543819542 },
      { lat: 35.67137513267939, lon: 139.74152751762082 },
      { lat: 35.6711925593578, lon: 139.74137035722154 },
      { lat: 35.671003896315646, lon: 139.74122433543482 },
      { lat: 35.67080959868525, lon: 139.74108980456361 },
      { lat: 35.6706101342338, lon: 139.7409670880615 },
      { lat: 35.67040598364101, lon: 139.7408564822295 },
      { lat: 35.67019763855533, lon: 139.74075825282225 },
      { lat: 35.669985600899686, lon: 139.7406726370842 },
      { lat: 35.66977038169132, lon: 139.74059984069515 },
      { lat: 35.669552499236836, lon: 139.74054003946722 },
      { lat: 35.66933247850735, lon: 139.74049337730835 },
      { lat: 35.66911084957651, lon: 139.74045996656182 },
      { lat: 35.668888146266795, lon: 139.7404398880061 },
      { lat: 35.66866490517755, lon: 139.74043318983686 },
    ],
  },
  "models/Toranomon-city-model.glb": uncalibrated(), // TODO(calibrate)
};

function isNum(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function isLatLon(point) {
  return !!point
    && isNum(point.lat) && isNum(point.lon)
    && point.lat >= -90 && point.lat <= 90
    && point.lon >= -180 && point.lon <= 180;
}

function usableRing(coverage) {
  if (!Array.isArray(coverage) || coverage.length < 3) return null;
  const ring = coverage.slice();
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (first && last && first.lat === last.lat && first.lon === last.lon) ring.pop();
  if (ring.length < 3) return null;
  for (let i = 0; i < ring.length; i++) {
    if (!isLatLon(ring[i])) return null;
  }
  return ring;
}

export function isCalibrated(entry) {
  if (!entry) return false;
  const world = entry.anchorWorld;
  if (!world || !isNum(world.x) || !isNum(world.z)) return false;
  if (!isLatLon(entry.anchorGeo)) return false;
  if (!isNum(entry.metersPerUnit) || entry.metersPerUnit <= 0) return false;
  if (!isNum(entry.northDegrees)) return false;
  return usableRing(entry.coverage) !== null;
}

function wrap360(degrees) {
  return ((degrees % 360) + 360) % 360;
}

// Ready only when the entry is complete AND its northDegrees is the same
// number the compass uses. The marker then rotates once, inside
// wgs84ToWorld, and nowhere else.
export function markerReady(entry, verifiedNorth) {
  if (!isCalibrated(entry) || !isNum(verifiedNorth)) return false;
  return Math.abs(wrap360(entry.northDegrees) - wrap360(verifiedNorth)) < 1e-6;
}

// Local equirectangular conversion for these small neighborhoods.
// northDegrees is clockwise from world -Z toward +X, the same meaning as
// VERIFIED_NORTH. Applied once here. Not applied to the compass, and the
// compass value is not applied again to the result.
// North-up (0): east increases world +X, north decreases world Z.
// Same conversion as wgs84ToWorld, without requiring a coverage ring.
// The calibration panel uses this to check a landmark before the
// boundary exists. It does not invent an anchor, a scale, or a north.
export function projectToWorld(entry, lat, lon) {
  const world = entry && entry.anchorWorld;
  if (!world || !isNum(world.x) || !isNum(world.z)) return null;
  if (!isLatLon(entry.anchorGeo)) return null;
  if (!isNum(entry.metersPerUnit) || entry.metersPerUnit <= 0) return null;
  if (!isNum(entry.northDegrees)) return null;
  if (!isNum(lat) || !isNum(lon)) return null;
  const lat0 = (entry.anchorGeo.lat * Math.PI) / 180;
  const east = (lon - entry.anchorGeo.lon) * 111320 * Math.cos(lat0);
  const north = (lat - entry.anchorGeo.lat) * 110540;
  const theta = (entry.northDegrees * Math.PI) / 180;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  const rotatedEast = east * cos + north * sin;
  const rotatedNorth = -east * sin + north * cos;
  return {
    x: world.x + rotatedEast / entry.metersPerUnit,
    z: world.z - rotatedNorth / entry.metersPerUnit,
  };
}

export function wgs84ToWorld(entry, lat, lon) {
  if (!isCalibrated(entry)) return null;
  return projectToWorld(entry, lat, lon);
}

function toEastNorth(entry, lat, lon) {
  const lat0 = (entry.anchorGeo.lat * Math.PI) / 180;
  return {
    e: (lon - entry.anchorGeo.lon) * 111320 * Math.cos(lat0),
    n: (lat - entry.anchorGeo.lat) * 110540,
  };
}

function closestOnSegment(point, a, b) {
  const abe = b.e - a.e;
  const abn = b.n - a.n;
  const len2 = abe * abe + abn * abn;
  let t = 0;
  if (len2 > 0) {
    t = ((point.e - a.e) * abe + (point.n - a.n) * abn) / len2;
    if (t < 0) t = 0;
    else if (t > 1) t = 1;
  }
  return { e: a.e + abe * t, n: a.n + abn * t };
}

function segmentDistance(point, a, b) {
  const hit = closestOnSegment(point, a, b);
  return Math.hypot(point.e - hit.e, point.n - hit.n);
}

function eastNorthToLatLon(entry, east, north) {
  const lat0 = (entry.anchorGeo.lat * Math.PI) / 180;
  const cos = Math.cos(lat0);
  return {
    lat: entry.anchorGeo.lat + north / 110540,
    lon: entry.anchorGeo.lon + (cos === 0 ? 0 : east / (111320 * cos)),
  };
}

function distanceToRing(entry, lat, lon, ring) {
  const nearest = nearestOnRing(entry, lat, lon, ring);
  return nearest ? nearest.distanceM : Infinity;
}

// Closest point on the coverage ring itself (edges and vertices), measured
// in local meters. This is the polygon perimeter, not a bounding box.
function nearestOnRing(entry, lat, lon, ring) {
  const point = toEastNorth(entry, lat, lon);
  let best = null;
  for (let i = 0; i < ring.length; i++) {
    const a = toEastNorth(entry, ring[i].lat, ring[i].lon);
    const next = ring[(i + 1) % ring.length];
    const b = toEastNorth(entry, next.lat, next.lon);
    const hit = closestOnSegment(point, a, b);
    const distanceM = Math.hypot(point.e - hit.e, point.n - hit.n);
    if (!best || distanceM < best.distanceM) {
      const geo = eastNorthToLatLon(entry, hit.e, hit.n);
      best = { lat: geo.lat, lon: geo.lon, distanceM };
    }
  }
  return best;
}

export function nearestPerimeter(entry, lat, lon) {
  const ring = entry && usableRing(entry.coverage);
  if (!ring || !entry.anchorGeo || !isLatLon(entry.anchorGeo) || !isNum(lat) || !isNum(lon)) return null;
  return nearestOnRing(entry, lat, lon, ring);
}

export function isInsideCoverage(entry, lat, lon) {
  const ring = entry && usableRing(entry.coverage);
  if (!ring || !isNum(lat) || !isNum(lon)) return false;
  return pointInRing(lat, lon, ring);
}

// Even-odd test on raw WGS84. No buffer and no extra margin.
function pointInRing(lat, lon, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const yi = ring[i].lat;
    const xi = ring[i].lon;
    const yj = ring[j].lat;
    const xj = ring[j].lon;
    const crosses = (yi > lat) !== (yj > lat);
    if (!crosses) continue;
    const xHit = ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (lon < xHit) inside = !inside;
  }
  return inside;
}

// "inside": the whole accuracy circle is inside the polygon.
// "outside": the whole circle is outside it.
// "edge": the circle touches or crosses the boundary, or accuracy is
// missing. A missing or overlapping circle is never called inside or outside.
export function classifyCoverage(entry, lat, lon, accuracyM) {
  const ring = entry && usableRing(entry.coverage);
  if (!ring || !entry.anchorGeo || !isLatLon(entry.anchorGeo) || !isNum(lat) || !isNum(lon)) return "outside";
  const inside = pointInRing(lat, lon, ring);
  const distance = distanceToRing(entry, lat, lon, ring);
  const known = isNum(accuracyM) && accuracyM >= 0;
  if (!known) return "edge";
  if (distance > accuracyM) return inside ? "inside" : "outside";
  return "edge";
}
