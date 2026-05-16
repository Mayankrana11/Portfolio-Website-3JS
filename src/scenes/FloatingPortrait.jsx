import { Float } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function FloatingPortrait() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/images/mayank.png"
  );

  const groupRef = useRef();

  useFrame(() => {
    const scrollY = window.scrollY;

    if (groupRef.current) {
      const scale =
        Math.max(1 - scrollY * 0.00035, 0.82);

      groupRef.current.scale.set(
        scale,
        scale,
        scale
      );

      groupRef.current.position.x =
        4.4 + scrollY * 0.0015;

      groupRef.current.position.y =
        -0.5 - scrollY * 0.0008;

      groupRef.current.rotation.y =
        scrollY * 0.00015;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.03}
      floatIntensity={0.2}
    >
      <group
        ref={groupRef}
        position={[4.9, -0.5, 0]}
      >
        <mesh>
          <planeGeometry args={[7.2, 9]} />

          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.82}
          />
        </mesh>
      </group>
    </Float>
  );
}