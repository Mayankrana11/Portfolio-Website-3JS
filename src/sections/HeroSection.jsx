import { useEffect, useState } from "react";
import HeroContent from "../components/HeroContent";

export default function HeroSection() {
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

  const opacity = Math.max(
    1 - scrollY / 700,
    0
  );

  const translateY = scrollY * 0.25;

  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div
        className="hero-layout"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <HeroContent />
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}