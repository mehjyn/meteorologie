import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Géométrie du cornet ──────────────────────────────────────────────────────
const CONE_POS_Y  = -1.28;
const CONE_HEIGHT = 2.1;
const CONE_TOP_R  = 0.68;
const CONE_TOP_Y  = CONE_POS_Y + CONE_HEIGHT / 2; // -0.23  (ouverture)
const CONE_TIP_Y  = CONE_POS_Y - CONE_HEIGHT / 2; // -2.33  (pointe)

/**
 * Rayon de la surface extérieure à une hauteur y donnée.
 * Suit la boule de glace OU le cornet selon la zone, prend le max.
 */
function outerRadius(y: number, scoopR: number, scoopY: number): number {
  const dy = y - scoopY;
  const rScoop =
    Math.abs(dy) < scoopR
      ? Math.sqrt(Math.max(0, scoopR * scoopR - dy * dy))
      : 0;
  const rCone =
    y <= CONE_TOP_Y && y >= CONE_TIP_Y
      ? CONE_TOP_R * ((y - CONE_TIP_Y) / (CONE_TOP_Y - CONE_TIP_Y))
      : 0;
  return Math.max(rScoop, rCone, 0.01);
}

// ─── Un filet de fonte ────────────────────────────────────────────────────────
function MeltStream({
  angle,
  startMelt,
  yOffset,   // décalage vertical du point de départ sur la boule
  melt,
  scoopR,
  scoopY,
}: {
  angle: number;
  startMelt: number;
  yOffset: number;
  melt: number;
  scoopR: number;
  scoopY: number;
}) {
  const progress = Math.max(0, (melt - startMelt) / 0.45);
  const tubeRef  = useRef<THREE.TubeGeometry | null>(null);

  const result = useMemo(() => {
    tubeRef.current?.dispose();
    if (progress <= 0) return null;

    // Point de départ variable selon yOffset — peut être haut ou bas sur la boule
    const startY  = scoopY + yOffset;
    const flowLen = Math.min(progress, 1) * 1.7;

    const N   = 28;
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const y = startY - t * flowLen;
      const r = outerRadius(y, scoopR, scoopY) + 0.008;
      pts.push(new THREE.Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r));
    }

    const curve      = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
    const tubeRadius = 0.013 + Math.min(progress, 1) * 0.007;
    const tube       = new THREE.TubeGeometry(curve, N, tubeRadius, 8, false);
    tubeRef.current  = tube;

    return { tube };
  }, [progress, angle, scoopR, scoopY, yOffset]);

  useEffect(() => () => tubeRef.current?.dispose(), []);

  if (!result) return null;

  return (
    <mesh geometry={result.tube}>
      <meshStandardMaterial color="#EDE2CF" roughness={0.38} />
    </mesh>
  );
}

// 14 filets — angles variés, démarrages à des hauteurs différentes sur la boule,
// et timings échelonnés pour une fonte progressive et naturelle.
const STREAMS: { angle: number; startMelt: number; yOffset: number }[] = [
  // Première vague — zone équatoriale et basse
  { angle: 0.18,  startMelt: 0.04, yOffset: -0.08 },
  { angle: 0.97,  startMelt: 0.05, yOffset: -0.20 },
  { angle: 1.75,  startMelt: 0.05, yOffset: -0.05 },
  { angle: 2.60,  startMelt: 0.06, yOffset: -0.30 },
  { angle: 3.40,  startMelt: 0.06, yOffset: -0.12 },
  { angle: 4.25,  startMelt: 0.07, yOffset: -0.22 },
  { angle: 5.10,  startMelt: 0.07, yOffset: -0.06 },
  { angle: 5.90,  startMelt: 0.08, yOffset: -0.18 },
  // Deuxième vague — zone plus haute sur la boule, démarre plus tard
  { angle: 0.55,  startMelt: 0.16, yOffset:  0.18 },
  { angle: 1.40,  startMelt: 0.19, yOffset:  0.10 },
  { angle: 2.20,  startMelt: 0.22, yOffset:  0.28 },
  { angle: 3.80,  startMelt: 0.25, yOffset:  0.15 },
  { angle: 4.65,  startMelt: 0.29, yOffset:  0.22 },
  { angle: 5.50,  startMelt: 0.33, yOffset:  0.08 },
];

// ─── Mesh principal ───────────────────────────────────────────────────────────
function IceCreamMesh({ melt }: { melt: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse    = useRef({ x: 0, y: 0 });
  const rot      = useRef({ x: 0.1, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * Math.PI * 0.65,
        y: (e.clientY / window.innerHeight - 0.5) * Math.PI * 0.22,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    rot.current.y += (mouse.current.x - rot.current.y) * 0.055;
    rot.current.x += (mouse.current.y - rot.current.x) * 0.055;
    groupRef.current.rotation.y = rot.current.y;
    groupRef.current.rotation.x = rot.current.x;
  });

  // La boule perd progressivement de la matière ET descend dans le cornet
  const scoopR = Math.max(0.60, 0.82 - melt * 0.22);
  const scoopY = 0.2 - melt * 0.13;
  // Surface plus brillante (humide) à mesure que la fonte avance
  const roughness = Math.max(0.18, 0.48 - melt * 0.30);

  return (
    <group ref={groupRef}>
      {/* ── Cornet ── */}
      <mesh rotation={[Math.PI, 0, 0]} position={[0, CONE_POS_Y, 0]}>
        <coneGeometry args={[CONE_TOP_R, CONE_HEIGHT, 6]} />
        <meshStandardMaterial color="#C49165" roughness={0.80} metalness={0.04} />
      </mesh>
      {/* Trame gaufrette */}
      <mesh rotation={[Math.PI, 0, 0]} position={[0, CONE_POS_Y, 0]}>
        <coneGeometry args={[CONE_TOP_R + 0.014, CONE_HEIGHT + 0.02, 6]} />
        <meshStandardMaterial
          color="#8A5E28"
          transparent
          opacity={0.28}
          wireframe
        />
      </mesh>

      {/* ── Boule ── */}
      <mesh position={[0, scoopY, 0]}>
        <sphereGeometry args={[scoopR, 40, 40]} />
        <meshStandardMaterial color="#EDE2CF" roughness={roughness} metalness={0.0} />
      </mesh>

      {/* ── Filets de fonte ── */}
      {STREAMS.map((s, i) => (
        <MeltStream
          key={i}
          angle={s.angle}
          startMelt={s.startMelt}
          yOffset={s.yOffset}
          melt={melt}
          scoopR={scoopR}
          scoopY={scoopY}
        />
      ))}
    </group>
  );
}

// ─── Canvas ───────────────────────────────────────────────────────────────────
export function IceCream3D({ melt }: { melt: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.8], fov: 36 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} color="#c8d8f0" />
      <directionalLight position={[3, 6, 4]} intensity={1.3} color="#fff8f0" />
      <pointLight position={[-5, 2, 1]} intensity={0.5} color="#7aaeff" />
      <pointLight position={[0, -4, 3]} intensity={0.28} color="#ffcf90" />
      <IceCreamMesh melt={melt} />
    </Canvas>
  );
}
