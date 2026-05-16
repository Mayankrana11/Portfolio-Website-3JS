import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 100;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 100;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.04;
      currentY += (mouseY - currentY) * 0.04;

      if (videoRef.current) {
        videoRef.current.style.transform = `
        translate3d(
            calc(-50% + ${-currentX}px),
            calc(-50% + ${-currentY}px),
            0
        )
        scale(0.94)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="bg-video"
      >
        <source src="/videos/Moon.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay" />
      <div className="ambient-glow" />
    </div>
  );
}