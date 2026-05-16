import HeroSection from "./sections/HeroSection";

export default function App() {
  return (
    <main className="app-container">
      {/* Cinematic Background Video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/Moon.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Cinematic Overlay */}
      <div className="video-overlay" />

      {/* Main Content */}
      <div className="content-layer">
        <HeroSection />

        <section className="dummy-section">
          <div className="dummy-content">
            <h2>Projects Coming Next</h2>

            <p>
              Cinematic interfaces, AI systems,
              immersive experiences.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}