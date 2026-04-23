/* =====================================================================
   Splash — "La glace fond. Elle disparaît."
   Port HTML/Three.js vanilla de Intro.tsx + IceCream3D.tsx (r3f d'origine).
   Cornet 3D réel qui fond progressivement ; citation, bouton d'entrée.
   Sortie: clic bouton / Enter → fade 750ms → onEnter().
   ===================================================================== */
const THREE_URL = "https://unpkg.com/three@0.160.0/build/three.module.js";

function Splash({ onEnter }) {
  const [visible, setVisible] = React.useState(true);
  const [leaving, setLeaving] = React.useState(false);
  const [melt, setMelt] = React.useState(0);
  const [showMelting, setShowMelting] = React.useState(false);

  // Persistance de session — déjà vu = on skip
  React.useEffect(() => {
    try {
      if (sessionStorage.getItem('mdg_splash_seen') === '1') {
        setVisible(false);
        document.body.style.overflow = '';
        onEnter && onEnter();
        return;
      }
      document.body.style.overflow = 'hidden';
    } catch {}
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Fonte progressive (0 → 1 en ~110 s, comme l'original MELT_RATE = 0.0009 / 100ms)
  React.useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setMelt((m) => Math.min(1, m + 0.0009));
    }, 100);
    return () => clearInterval(id);
  }, [visible]);

  React.useEffect(() => { if (melt > 0.04) setShowMelting(true); }, [melt]);

  const enter = React.useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    try { sessionStorage.setItem('mdg_splash_seen', '1'); } catch {}
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
      onEnter && onEnter();
    }, 750);
  }, [leaving, onEnter]);

  // Touche Entrée → entrée
  React.useEffect(() => {
    if (!visible) return;
    const onKey = (e) => { if (e.key === 'Enter') enter(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, enter]);

  if (!visible) return null;

  return (
    <div className={`splash ${leaving ? 'splash--leaving' : ''}`} role="dialog" aria-label="Introduction">
      {/* Blobs d'ambiance */}
      <div className="splash-bg" aria-hidden>
        <div className="blob blob--ice" />
        <div className="blob blob--meta" />
        <div className="spotlight" />
        <div className="vignette" />
      </div>

      {/* En-tête */}
      <div className="splash-top">
        <span className="splash-kicker">Météorologie du goût <span className="sep">—</span> EHESS <span className="sep">·</span> 2026</span>
      </div>

      {/* Zone centrale */}
      <div className="splash-center">
        <blockquote className="splash-quote">
          <p>
            «&nbsp;La glace fond. Elle disparaît. C'est dans cet instant éphémère<br className="hide-sm"/>
            que réside toute la métaphysique du bonheur.&nbsp;»
          </p>
        </blockquote>

        <div className="splash-cone-wrap">
          <div className="splash-cone-halo" aria-hidden />
          <IceCream3D melt={melt} />
        </div>

        <p className={`splash-melting ${showMelting ? 'is-visible':''}`}><em>Elle fond déjà…</em></p>
      </div>

      {/* Bouton d'entrée */}
      <div className="splash-bottom">
        <button type="button" onClick={enter} className="splash-enter">
          <span className="splash-enter-label">Entrer dans l'enquête</span>
          <span className="splash-enter-rule" aria-hidden>
            <span className="rule-line" />
            <span className="rule-arrow">↓</span>
          </span>
        </button>
      </div>
    </div>
  );
}

/* =====================================================================
   IceCream3D — port Three.js vanilla de IceCream3D.tsx (r3f).
   Mêmes constantes, même logique de fonte, mêmes 14 filets.
   ===================================================================== */

// Constantes (copie fidèle)
const CONE_POS_Y  = -1.28;
const CONE_HEIGHT = 2.1;
const CONE_TOP_R  = 0.68;
const CONE_TOP_Y  = CONE_POS_Y + CONE_HEIGHT / 2;
const CONE_TIP_Y  = CONE_POS_Y - CONE_HEIGHT / 2;

const STREAMS = [
  { angle: 0.18, startMelt: 0.04, yOffset: -0.08 },
  { angle: 0.97, startMelt: 0.05, yOffset: -0.20 },
  { angle: 1.75, startMelt: 0.05, yOffset: -0.05 },
  { angle: 2.60, startMelt: 0.06, yOffset: -0.30 },
  { angle: 3.40, startMelt: 0.06, yOffset: -0.12 },
  { angle: 4.25, startMelt: 0.07, yOffset: -0.22 },
  { angle: 5.10, startMelt: 0.07, yOffset: -0.06 },
  { angle: 5.90, startMelt: 0.08, yOffset: -0.18 },
  { angle: 0.55, startMelt: 0.16, yOffset:  0.18 },
  { angle: 1.40, startMelt: 0.19, yOffset:  0.10 },
  { angle: 2.20, startMelt: 0.22, yOffset:  0.28 },
  { angle: 3.80, startMelt: 0.25, yOffset:  0.15 },
  { angle: 4.65, startMelt: 0.29, yOffset:  0.22 },
  { angle: 5.50, startMelt: 0.33, yOffset:  0.08 },
];

function outerRadius(y, scoopR, scoopY) {
  const dy = y - scoopY;
  const rScoop = Math.abs(dy) < scoopR ? Math.sqrt(Math.max(0, scoopR*scoopR - dy*dy)) : 0;
  const rCone  = y <= CONE_TOP_Y && y >= CONE_TIP_Y
    ? CONE_TOP_R * ((y - CONE_TIP_Y) / (CONE_TOP_Y - CONE_TIP_Y))
    : 0;
  return Math.max(rScoop, rCone, 0.01);
}

function IceCream3D({ melt }) {
  const mountRef = React.useRef(null);
  const stateRef = React.useRef(null);

  // Init scene
  React.useEffect(() => {
    let disposed = false;
    let cleanup = null;
    (async () => {
      const THREE = await import(THREE_URL);
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const width = mount.clientWidth || 400;
      const height = mount.clientHeight || 400;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, width/height, 0.1, 100);
      camera.position.set(0, 0.2, 5.8);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      // Lights (copie fidèle)
      scene.add(new THREE.AmbientLight(0xc8d8f0, 0.4));
      const dir = new THREE.DirectionalLight(0xfff8f0, 1.3);
      dir.position.set(3, 6, 4); scene.add(dir);
      const p1 = new THREE.PointLight(0x7aaeff, 0.5); p1.position.set(-5, 2, 1); scene.add(p1);
      const p2 = new THREE.PointLight(0xffcf90, 0.28); p2.position.set(0, -4, 3); scene.add(p2);

      const group = new THREE.Group();
      scene.add(group);

      // Cornet
      const coneGeo = new THREE.ConeGeometry(CONE_TOP_R, CONE_HEIGHT, 6);
      const coneMat = new THREE.MeshStandardMaterial({ color: 0xC49165, roughness: 0.80, metalness: 0.04 });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = Math.PI; cone.position.y = CONE_POS_Y;
      group.add(cone);

      // Trame gaufrette (wireframe)
      const waffleGeo = new THREE.ConeGeometry(CONE_TOP_R + 0.014, CONE_HEIGHT + 0.02, 6);
      const waffleMat = new THREE.MeshStandardMaterial({ color: 0x8A5E28, transparent: true, opacity: 0.28, wireframe: true });
      const waffle = new THREE.Mesh(waffleGeo, waffleMat);
      waffle.rotation.x = Math.PI; waffle.position.y = CONE_POS_Y;
      group.add(waffle);

      // Boule
      const scoopGeo = new THREE.SphereGeometry(1, 40, 40);
      const scoopMat = new THREE.MeshStandardMaterial({ color: 0xEDE2CF, roughness: 0.48, metalness: 0 });
      const scoop = new THREE.Mesh(scoopGeo, scoopMat);
      group.add(scoop);

      // Filets — on en garde un par entrée, on recrée la géométrie à chaque frame
      const streamMat = new THREE.MeshStandardMaterial({ color: 0xEDE2CF, roughness: 0.38 });
      const streams = STREAMS.map(() => {
        const m = new THREE.Mesh(new THREE.BufferGeometry(), streamMat);
        m.visible = false;
        group.add(m);
        return m;
      });

      // Mouse tracking (global, comme l'original)
      const mouse = { x: 0, y: 0 };
      const onMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth  - 0.5) * Math.PI * 0.65;
        mouse.y = (e.clientY / window.innerHeight - 0.5) * Math.PI * 0.22;
      };
      window.addEventListener('mousemove', onMove);

      const rot = { x: 0.1, y: 0 };
      let raf = 0;

      const onResize = () => {
        const w = mount.clientWidth, h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w/h; camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(mount);

      stateRef.current = {
        render(currentMelt) {
          // Boule : rayon et Y dépendent de melt (copie fidèle)
          const scoopR = Math.max(0.60, 0.82 - currentMelt * 0.22);
          const scoopY = 0.2 - currentMelt * 0.13;
          const roughness = Math.max(0.18, 0.48 - currentMelt * 0.30);
          scoop.scale.setScalar(scoopR);
          scoop.position.y = scoopY;
          scoopMat.roughness = roughness;

          // Filets
          STREAMS.forEach((s, i) => {
            const progress = Math.max(0, (currentMelt - s.startMelt) / 0.45);
            const mesh = streams[i];
            if (progress <= 0) { mesh.visible = false; return; }
            const startY = scoopY + s.yOffset;
            const flowLen = Math.min(progress, 1) * 1.7;
            const N = 28;
            const pts = [];
            for (let k = 0; k <= N; k++) {
              const t = k / N;
              const y = startY - t * flowLen;
              const r = outerRadius(y, scoopR, scoopY) + 0.008;
              pts.push(new THREE.Vector3(Math.cos(s.angle)*r, y, Math.sin(s.angle)*r));
            }
            const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
            const tubeRadius = 0.013 + Math.min(progress,1) * 0.007;
            const tube = new THREE.TubeGeometry(curve, N, tubeRadius, 8, false);
            mesh.geometry.dispose();
            mesh.geometry = tube;
            mesh.visible = true;
          });
        }
      };

      const loop = () => {
        rot.y += (mouse.x - rot.y) * 0.055;
        rot.x += (mouse.y - rot.x) * 0.055;
        group.rotation.y = rot.y;
        group.rotation.x = rot.x;
        stateRef.current && stateRef.current.render(stateRef.currentMelt ?? 0);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };
      loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', onMove);
        ro.disconnect();
        renderer.dispose();
        coneGeo.dispose(); coneMat.dispose();
        waffleGeo.dispose(); waffleMat.dispose();
        scoopGeo.dispose(); scoopMat.dispose();
        streamMat.dispose();
        streams.forEach(m => m.geometry && m.geometry.dispose());
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    })().catch(err => console.error('IceCream3D init failed:', err));
    return () => { disposed = true; if (cleanup) cleanup(); };
  }, []);

  // Push le melt courant au render loop
  React.useEffect(() => {
    if (stateRef.current) stateRef.currentMelt = melt;
  }, [melt]);

  return <div ref={mountRef} className="icecream3d" />;
}

window.Splash = Splash;
window.IceCream3D = IceCream3D;
