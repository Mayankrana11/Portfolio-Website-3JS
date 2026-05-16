import HeroContent from "../components/HeroContent";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-layout">
        <HeroContent />
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}