import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import Lenis from "lenis";

import Experience from "./scenes/Experience";
import HeroSection from "./sections/HeroSection";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="app-container">
      <div className="canvas-wrapper">
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 40,
          }}
        >
          <Experience />
        </Canvas>
      </div>

      <div className="html-layer">
        <HeroSection />

        <section className="dummy-section">
          <div className="dummy-content">
            <h2>Projects Coming Next</h2>

            <p>
              This section exists temporarily to create cinematic scroll depth.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}