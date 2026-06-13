"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/** A floating "print product" — a rounded card/box with a brand-colored material. */
function FloatingCard({
  position,
  rotation = [0, 0, 0],
  size,
  color,
  metalness = 0.1,
  roughness = 0.35,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  color: string;
  metalness?: number;
  roughness?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.z = rotation[2] + Math.sin(t * 0.3) * 0.04;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.8}>
      <RoundedBox
        ref={ref}
        args={size}
        radius={Math.min(0.1, size[2] / 2)}
        smoothness={4}
        position={position}
        rotation={rotation}
      >
        <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
      </RoundedBox>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 6.5], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.35} color="#06B6D4" />

      <Suspense fallback={null}>
        <group rotation={[0.05, -0.15, 0]}>
          {/* Business card — front, slightly tilted */}
          <FloatingCard
            position={[-0.9, 0.3, 0.6]}
            rotation={[0, 0.25, -0.06]}
            size={[2.4, 1.4, 0.05]}
            color="#2563EB"
            metalness={0.15}
          />

          {/* Brochure — behind, white */}
          <FloatingCard
            position={[1.1, 0.5, -0.4]}
            rotation={[0, -0.2, 0.05]}
            size={[1.7, 2.2, 0.06]}
            color="#ffffff"
            roughness={0.5}
          />

          {/* Packaging box — bottom, accent color */}
          <FloatingCard
            position={[0, -1.2, 0.3]}
            rotation={[0.1, 0.3, 0]}
            size={[1.5, 1.5, 1.5]}
            color="#D97757"
            roughness={0.45}
          />
        </group>

        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={0.25}
          scale={8}
          blur={2.5}
          far={3}
        />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
