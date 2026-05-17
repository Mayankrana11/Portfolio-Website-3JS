export default function ExperienceSection({
  experiences,
}) {
  return (
    <section id="experience" className="experience-section">
  <div className="experience-brain-layer">
    <img
      src="/images/exp.png"
      alt="AI Brain"
      className="experience-brain"
    />
  </div>

  <div className="experience-content">
    <p className="section-label">EXPERIENCE</p>

    <h2>
      Building
      <br />
      Intelligent
      <br />
      Systems
    </h2>

    <p className="experience-description">
    I bridge the gap between intelligence and interaction. 
    From engineering AI document pipelines to launching full-stack apps, 
    I build systems where complex logic meets immersive UX.
    </p>

    <div className="experience-cards">
      <div className="experience-card">
        <h3>SWE & AI Intern DRDO (SSPL)</h3>

        <span>May 2025 — June 2025</span>

        <ul>
          <li>
            Confidential AI-powered document intelligence system using locally hosted model
          </li>

          <li>
            Python Flask backend for chatbot APIs
          </li>

          <li>
            OCR & NLP pipelines for scanned documents
          </li>

          <li>
            Semantic search using Sentence Transformers + FAISS
          </li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Full Stack Developer PACE NGO</h3>

        <span>Sept 2025 — Dec 2025</span>

        <ul>
          <li>
            Child & Family Tracking System for NGO operations
          </li>

          <li>
            Role-based UI using Next.js & React
          </li>

          <li>
            Firebase Auth, Firestore & Storage
          </li>

          <li>
            Google Maps integration for field visits
          </li>
          <a
          href="https://github.com/Mayankrana11/ngo-community-compass"
          target="_blank"
          rel="noopener noreferrer"
          className="experience-link"
        >
          GitHub →
        </a>

          <a
          href="https://ngo-tracker-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="experience-link-btn secondary"
        >
          Live Product →
        </a>

        </ul>
      </div>
    </div>
  </div>
</section>
  );
}