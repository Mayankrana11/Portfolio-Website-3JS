import { Float } from "@react-three/drei";

import FloatingPortrait from "./FloatingPortrait";
import CameraRig from "./CameraRig";

export default function Experience() {
  return (
    <>
      {/* Main Background */}
      <color attach="background" args={["#000000"]} />

      {/* Lighting */}
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#ffffff"
      />

      <pointLight
        position={[4, 1, 2]}
        intensity={10}
        color="#3b82f6"
      />

      <pointLight
        position={[-4, 2, 1]}
        intensity={4}
        color="#ffffff"
      />

      {/* Portrait */}
      <Float
        speed={1.5}
        rotationIntensity={0.05}
        floatIntensity={0.3}
      >
        <FloatingPortrait />
      </Float>

      {/* Ground */}
      <mesh
        position={[0, -3.5, -8]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[100, 100]} />

        <meshStandardMaterial
          color="#050505"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Camera Motion */}
      <CameraRig />
    </>
  );
}