export default function SkillsSection() {

  const skills = [
    "Data Structures & Algorithms Design",
    "Java • Object Oriented Programming",
    "JavaScript / TypeScript",

    "Python • C / C++",
    "React • Next.js • Three.js • Node.js",
    "Firebase • MySQL • Supabase",

    "OCR • NLP • Hugging Face",
    "Vercel • Netlify • Render • Railway",
    "UE5 • After Effects • Premiere Pro • Filmora • Figma",
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-piano-layer">
        <img
          src="/images/piano.png"
          alt="Piano"
          className="piano-image"
        />
      </div>

      <div className="skills-content">
        <p className="section-label">SKILLS</p>

        <h2>
          Tools &
          <br />
          Technologies
        </h2>

        <p className="skills-description">
        Like a composer layering harmonies, I balance structural precision with interactive rhythm to bring digital experiences to life.
        </p>

        <div className="skills-grid-new">
          {skills.map((skill, index) => (
            <div className="skill-pill" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}