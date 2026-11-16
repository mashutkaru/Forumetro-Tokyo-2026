/* Forumetro compass. No plugin, dependency, network request or site mutation.
   THREE must be the same Three.js instance as the existing viewer.
   northDegrees: clockwise on the ground from world -Z toward +X.
   0 = north is -Z; 90 = north is +X; 180 = north is +Z; 270 = north is -X.
   null = calibration unknown: show an explicitly unverified orientation dial. */
export function createForumetroCompass({ THREE, stage, camera, controls, requestRender = () => {}, northDegrees = null }) {
  if (!stage || !camera || !controls || !THREE) throw new Error('Compass needs the existing stage, camera and OrbitControls.');
  const previousPosition = stage.style.position;
  if (getComputedStyle(stage).position === 'static') stage.style.position = 'relative';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'forumetro-compass';
  button.dir = 'ltr';
  button.innerHTML = `<svg viewBox="0 0 88 88" aria-hidden="true" focusable="false"><circle cx="44" cy="44" r="39" fill="white" fill-opacity=".96" stroke="#aebdc6"/><g class="forumetro-compass-dial"><path d="M44 22 L40 37 L44 34 L48 37 Z" fill="#be2639"/><path d="M44 66 L41 51 L44 54 L47 51 Z" fill="#758592"/><text x="44" y="18" text-anchor="middle" fill="#be2639">N</text><text x="74" y="48" text-anchor="middle">E</text><text x="44" y="81" text-anchor="middle">S</text><text x="14" y="48" text-anchor="middle">W</text></g><circle cx="44" cy="44" r="3" fill="#18384c"/></svg><span class="forumetro-compass-note"></span>`;
  Object.assign(button.style, { position:'absolute', top:'12px', right:'12px', zIndex:'10', width:'88px', padding:'0', border:'0', borderRadius:'44px', background:'transparent', color:'#18384c', cursor:'pointer', touchAction:'manipulation', fontFamily:'Arial, sans-serif', lineHeight:'1.1', boxShadow:'0 2px 10px #102f4526' });
  const svg = button.querySelector('svg'); svg.style.display='block'; svg.style.width='100%';
  const dial = button.querySelector('.forumetro-compass-dial');
  dial.style.transformOrigin='44px 44px';
  button.querySelectorAll('text').forEach(t => {t.style.fontSize='12px';t.style.fontWeight='700';});
  const note = button.querySelector('.forumetro-compass-note');
  Object.assign(note.style,{display:'block',fontSize:'10px',background:'white',borderRadius:'4px',padding:'3px 2px',marginTop:'2px'});
  let north = null, alive = true;
  const normalize = d => ((d % 360) + 360) % 360;
  function update() {
    if (!alive) return;
    // OrbitControls azimuth is measured from +Z toward +X, camera around target.
    const theta = controls.getAzimuthalAngle();
    const rotation = THREE.MathUtils.radToDeg(theta) + (north ?? 0);
    dial.style.transform = `rotate(${rotation}deg)`;
    const known = north !== null;
    note.textContent = known ? 'North-up' : 'North unverified';
    button.title = known ? 'Return to north-up, keeping zoom, tilt and position' : 'North is not calibrated for this model. This dial shows relative orientation only.';
    button.setAttribute('aria-label',button.title);
    button.setAttribute('aria-disabled',String(!known));
    svg.style.opacity = known ? '1' : '.6';
  }
  function setNorthDegrees(value) {
    if (value !== null && !Number.isFinite(value)) throw new Error('northDegrees must be a finite number or null.');
    north = value === null ? null : normalize(value);
    update(); requestRender();
  }
  function northUp(event) {
    event?.stopPropagation();
    if (north === null) return;
    // Flush pending damping before assigning a new azimuth, to prevent drift.
    const damping = controls.enableDamping;
    controls.enableDamping = false;
    controls.update();
    const offset = camera.position.clone().sub(controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);
    spherical.theta = -THREE.MathUtils.degToRad(north);
    offset.setFromSpherical(spherical);
    camera.position.copy(controls.target).add(offset);
    camera.lookAt(controls.target);
    controls.update();
    controls.enableDamping = damping;
    update(); requestRender();
  }
  const stop = e => e.stopPropagation();
  button.addEventListener('pointerdown',stop);
  button.addEventListener('dblclick',stop);
  button.addEventListener('click',northUp);
  button.addEventListener('focus',()=>button.style.outline='3px solid #1683af');
  button.addEventListener('blur',()=>button.style.outline='');
  stage.appendChild(button);
  controls.addEventListener('change',update);
  setNorthDegrees(northDegrees);
  return { update, setNorthDegrees, northUp, element:button, dispose() {alive=false;controls.removeEventListener('change',update);button.remove();stage.style.position=previousPosition;} };
}
