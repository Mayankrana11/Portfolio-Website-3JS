export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-bg-layer">
        <img
          src="/images/contact.png"
          alt=""
          className="contact-japan-bg"
        />
      </div>

      <div className="contact-card">
        <h2>Get In Touch</h2>

        <p>
          I'm currently open to new opportunities
          and interesting projects.
        </p>

        <form
          action="https://formspree.io/f/xrbobzwv"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>
        <div className="contact-socials">

        <a
          href="https://github.com/Mayankrana11"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="devicon-github-original"></i>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mayank-rana-101355322/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="devicon-linkedin-plain"></i>
          LinkedIn
        </a>

        <a
          href="mailto:work.mayankrana11@gmail.com"
          className="social-link"
        >
          <i className="devicon-google-plain"></i>
          Email
        </a>

</div>
      </div>
    </section>
  );
}