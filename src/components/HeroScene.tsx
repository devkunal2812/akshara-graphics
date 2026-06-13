"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import {
  RoundedBox,
  Text,
  ContactShadows,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * A single clickable keyboard key — a chunky rounded cap on a base,
 * inspired by the "Ctrl + Z / My Mistakes" illustration. Click or tap
 * to "press" the key (it depresses, then springs back).
 */
function KeyCap({
  label,
  position,
  color = "#2563EB",
  labelColor = "#ffffff",
  width = 1.6,
  fontSize = 0.55,
  onPress,
}: {
  label: string;
  position: [number, number, number];
  color?: string;
  labelColor?: string;
  width?: number;
  fontSize?: number;
  onPress?: () => void;
}) {
  const capRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // target Y offset for the cap (relative to its resting position)
  const targetY = useRef(0);

  useFrame((_, delta) => {
    if (!capRef.current) return;

    targetY.current = pressed ? -0.18 : hovered ? 0.04 : 0;

    capRef.current.position.y = THREE.MathUtils.damp(
      capRef.current.position.y,
      targetY.current,
      12,
      delta
    );

    const targetScale = pressed ? 0.96 : hovered ? 1.03 : 1;
    const s = THREE.MathUtils.damp(capRef.current.scale.x, targetScale, 12, delta);
    capRef.current.scale.setScalar(s);
  });

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setPressed(true);
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (pressed) onPress?.();
    setPressed(false);
  };

  return (
    <group position={position}>
      {/* Base / well the key sits in */}
      <RoundedBox
        args={[width + 0.16, 0.28, width + 0.16]}
        radius={0.08}
        smoothness={4}
        position={[0, -0.32, 0]}
      >
        <meshStandardMaterial color="#1E2A4A" roughness={0.6} metalness={0.2} />
      </RoundedBox>

      {/* Cap (animated) */}
      <group
        ref={capRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => setPressed(false)}
      >
        <RoundedBox args={[width, 0.55, width]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.35} metalness={0.1} />
        </RoundedBox>

        <Text
          position={[0, 0.32, 0]}
          fontSize={fontSize}
          color={labelColor}
          fontWeight={700}
          anchorX="center"
          anchorY="middle"
          rotation={[-Math.PI / 2.3, 0, 0]}
        >
          {label}
        </Text>
      </group>
    </group>
  );
}

/** Small spinning asterisk / sparkle accent, echoing the illustration's "*" mark. */
function Sparkle({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.6;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.6} rotationIntensity={0}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial color="#FB923C" roughness={0.3} />
      </mesh>
    </Float>
  );
}

interface HeroSceneProps {
  /** Called when the user "presses" either key. */
  onUndo?: () => void;
}

export default function HeroScene({ onUndo }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.6, 6], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.35} color="#06B6D4" />

      <Suspense fallback={null}>
        <group rotation={[0.35, -0.25, 0]} position={[0, -0.3, 0]}>
          <KeyCap
            label="ctrl"
            position={[-1, 0, 0]}
            color="#2563EB"
            fontSize={0.42}
            onPress={onUndo}
          />
          <KeyCap
            label="Z"
            position={[0.9, 0.15, -0.2]}
            color="#3B4FD9"
            fontSize={0.6}
            onPress={onUndo}
          />

          <Sparkle position={[-1.9, 0.6, 0.2]} />
        </group>

        <ContactShadows
          position={[0, -1.2, 0]}
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
