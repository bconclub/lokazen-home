"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

/**
 * PLACEHOLDER hero object — proves the R3F pipeline (geometry + material +
 * lighting + postprocessing + idle motion) before the real .glb vectors land.
 * Swap <PlaceholderVector/> for <primitive object={gltf.scene}/> per section.
 */
function PlaceholderVector() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ff5a1e"
          emissive="#f01e1e"
          emissiveIntensity={0.25}
          metalness={0.85}
          roughness={0.2}
          flatShading
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -2, 3]} intensity={1.4} color="#ff5a1e" />
        <pointLight position={[4, -3, 2]} intensity={1} color="#f01e1e" />
        <PlaceholderVector />
        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.6}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
