import lenis from "../lib/lenis";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    lenis.scrollTo(element, {
      duration: 1.8,
    });
  };

  return (
    <nav className="navbar">
      <button
        onClick={() => scrollToSection("about")}
      >
        About
      </button>

      <button
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </button>

      <button
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </button>

      <button
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </button>

      <a href="/docs/resume.pdf" download>
        Resume
      </a>

      <button
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </button>
    </nav>
  );
}