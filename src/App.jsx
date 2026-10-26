
import "./App.css";

const skills = [
  {
    title: "Computer Basics",
    description: "Learn about computers and their basic parts.",
  },
  {
    title: "Keyboard and Mouse",
    description: "Learn how to use a keyboard and mouse.",
  },
  {
    title: "Files and Folders",
    description: "Learn to create and organize files and folders.",
  },
  {
    title: "Internet Basics",
    description: "Learn how to browse websites and search online.",
  },
  {
    title: "Email",
    description: "Learn how to send and receive emails.",
  },
  {
    title: "Online Safety",
    description: "Learn how to stay safe while using the internet.",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          LearningBsc
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#references">Quiz</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#profile" className="profile-icon" aria-label="Profile">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </a>
      </nav>

      <header className="hero" id="home">
        <p className="tagline">LEARN. EXPLORE. GROW.</p>

        <h1>
          Basic Computer Skills
          <br />
          For Rural School Students
        </h1>

        <p className="hero-text">
          Learn essential computer skills in a simple
          and easy way.
        </p>

        <a href="#skills" className="main-button">
          Start Learning
        </a>
      </header>

      <section className="about-section" id="about">
        <h2>About Our Website</h2>
        <p>
          Our website helps rural school students learn
          basic computer skills and develop their digital
          knowledge for the future.
        </p>
      </section>

      <main className="skills-section" id="skills">
        <h2>Explore Computer Skills</h2>
        <p className="section-text">
          Choose a topic and start building your computer knowledge.
        </p>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <button
                onClick={() =>
                  alert(
                    "This lesson will be connected to the Skill Learning section."
                  )
                }
              >
                Learn Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="contact-box">
            <h3>Contact Us</h3>
            <p>Phone: 9326537968</p>
            <p>Email: learningBsc.gmail.com</p>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#quiz">Quiz</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 LearningBsc. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
