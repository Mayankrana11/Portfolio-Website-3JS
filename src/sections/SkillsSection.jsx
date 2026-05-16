export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-piano-layer">
        <img
          src="/images/piano.png"
          alt="Piano"
          className="piano-image"
        />
      </div>

      <div className="skills-content">
        <p className="section-label">
          SKILLS
        </p>

        <h2>
          Technologies
          <br />
          & Tools
        </h2>

        <p className="skills-description">
          I approach development like
          composition — balancing structure,
          rhythm, interaction, and emotion
          to create immersive digital
          experiences.
        </p>
      </div>
    </section>
  );
}