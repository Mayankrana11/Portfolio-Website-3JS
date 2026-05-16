import { RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingPortrait() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/images/mayank.png"
  );

  return (
    <group position={[2.2, 0, 0]}>
      <RoundedBox
        args={[3, 4.2, 0.12]}
        radius={0.08}
        smoothness={4}
      >
        <meshPhysicalMaterial
          map={texture}
          roughness={0.15}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </RoundedBox>
    </group>
  );
}