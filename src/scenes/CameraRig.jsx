import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function CameraRig() {
  const { camera } = useThree();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    camera.position.x +=
      ((state.mouse.x * 0.4) - camera.position.x) * 0.03;

    camera.position.y +=
      ((state.mouse.y * 0.25) - camera.position.y) * 0.03;

    camera.position.z = 7 - scrollY * 0.0015;

    camera.rotation.y = Math.sin(time * 0.2) * 0.02;
  });

  return null;
}