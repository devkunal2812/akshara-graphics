"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import {
  RoundedBox,
  Text,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * A single clickable keyboard key — a chunky rounded cap on a base.
 * Click or tap to "press" the key (it depresses, then springs back).
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

  const targetY = useRef(0);

  useFrame((_, delta) => {
    if (!capRef.current) return;

    targetY.current = pressed ? -0.16 : hovered ? 0.05 : 0;

    capRef.current.position.y = THREE.MathUtils.damp(
      capRef.current.position.y,
      targetY.current,
      14,
      delta
    );

    const targetScale = pressed ? 0.97 : hovered ? 1.04 : 1;
    const s = THREE.MathUtils.damp(capRef.current.scale.x, targetScale, 14, delta);
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
      {/* Base / socket the key sits in */}
      <RoundedBox
        args={[width + 0.18, 0.26, width + 0.18]}
        radius={0.1}
        smoothness={4}
        position={[0, -0.34, 0]}
      >
        <meshStandardMaterial color="#3D3833" roughness={0.8} metalness={0.05} />
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
        <RoundedBox args={[width, 0.5, width]} radius={0.14} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.55} metalness={0.05} />
        </RoundedBox>

        <Text
          position={[0, 0.3, 0]}
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

interface HeroSceneProps {
  /** Called when the user "presses" either key. */
  onUndo?: () => void;
}

export default function HeroScene({ onUndo }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 6], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <ambientLight intensity={1.1} color="#FFF8F0" />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#FFF4E8" />
      <directionalLight position={[-4, -2, -3]} intensity={0.25} color="#D97757" />

      <Suspense fallback={null}>
        <group rotation={[0.32, -0.22, 0]} position={[0, -0.25, 0]}>
          <KeyCap
            label="ctrl"
            position={[-1, 0, 0]}
            color="#D97757"
            labelColor="#FFF8F0"
            fontSize={0.4}
            onPress={onUndo}
          />
          <KeyCap
            label="Z"
            position={[0.95, 0.1, -0.2]}
            color="#0F172A"
            labelColor="#F8FAFC"
            fontSize={0.58}
            onPress={onUndo}
          />
        </group>

        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.18}
          scale={7}
          blur={2.5}
          far={3}
          color="#5F5A54"
        />

        <Environment preset="apartment" environmentIntensity={0.4} />
      </Suspense>
    </Canvas>
  );
}
