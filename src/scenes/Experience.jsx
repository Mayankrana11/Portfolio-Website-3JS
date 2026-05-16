import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

import FloatingPortrait from "./FloatingPortrait";
import CameraRig from "./CameraRig";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <fog attach="fog" args={["#050505", 8, 20]} />

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={15}
        color="#8ab4ff"
      />

      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={1}
      >
        <FloatingPortrait />
      </Float>

      <mesh position={[0, -3, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      <Environment preset="city" />

      <CameraRig />

      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />

        <Vignette
          eskil={false}
          offset={0.2}
          darkness={1.1}
        />
      </EffectComposer>
    </>
  );
}