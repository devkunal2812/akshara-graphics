"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

/** A floating "print product" — a rounded card/box with a brand-colored material. */
function FloatingCard({
  position,
  size,
  color,
  rotationSpeed = 0.2,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  rotationSpeed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * rotationSpeed;
      ref.current.rotation.x += delta * rotationSpeed * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <RoundedBox ref={ref} args={size} radius={0.08} smoothness={4} position={position}>
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.1} />
      </RoundedBox>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -2, -5]} intensity={0.4} color="#06B6D4" />

      <Suspense fallback={null}>
        {/* Business card */}
        <FloatingCard position={[-1.4, 0.6, 0]} size={[2.2, 1.3, 0.06]} color="#2563EB" rotationSpeed={0.15} />
        {/* Brochure */}
        <FloatingCard position={[1.6, -0.4, -0.5]} size={[1.6, 2.1, 0.06]} color="#ffffff" rotationSpeed={0.2} />
        {/* Packaging box */}
        <FloatingCard position={[0.2, -1.3, 0.6]} size={[1.4, 1.4, 1.4]} color="#D97757" rotationSpeed={0.25} />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
