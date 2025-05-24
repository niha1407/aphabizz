import React from "react";
import "./styles.css";

export default function App() {
  const handleLearnMoreClick = () => {
    const section = document.getElementById("overview");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Launch Your Tech Career with React JS</h1>
          <p className="subtitle">
            Live Training by Industry Expert – MNC Engineer (₹35.5 LPA, 6+ years
            experience)
          </p>
          {/* <p className="event-details">
            📅 June 6, 2025 &nbsp; | &nbsp; 🕒 1:30 PM EST &nbsp; | &nbsp; 🎤
            Hosted by Alpha Bizz Careers
          </p> */}
          <button className="cta-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </header>

      <main>
        <section id="overview" className="card-section">
          <h2>🚀 Why Learn React JS?</h2>
          <p>
            React JS is one of the most powerful and in-demand frontend
            frameworks in the world, trusted by companies like Meta, Netflix,
            Uber, and Airbnb. Learning React JS opens doors to global
            opportunities — whether it’s a job in a top MNC, a freelance career
            abroad, or building your own tech startup.
          </p>
        </section>

        <section className="card-section">
          <h2>📚 What You'll Master:</h2>
          <ul>
            <li>Core JavaScript + ES6</li>
            <li>React Components, Hooks, Routing</li>
            <li>Redux for State Management</li>
            <li>HTML/CSS basics</li>
            <li>Responsive Design, Git & GitHub</li>
            <li>Resume + Interview Prep</li>
            <li>Live Industry-Level Projects</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>💼 Career Growth Path:</h2>
          <p>
            <strong>Freshers (0–1 Year):</strong> ₹3–6 LPA (India) | $10–20/hr
            (Freelance)
          </p>
          <p>
            <strong>2–5 Years Experience:</strong> ₹8–12 LPA | $25–40/hr or
            $5000+/month (Remote)
          </p>
          <p>
            <strong>6+ Years Experience:</strong> ₹15–25+ LPA |
            $7000–$12,000/month (Global Contracting)
          </p>
        </section>

        <section className="card-section">
          <h2>🌍 Global Scope:</h2>
          <ul>
            <li>Remote Job Options in USA, UK, Canada, UAE</li>
            <li>High-paying freelance gigs on Upwork, Fiverr, Toptal</li>
            <li>
              International relocation scope: Germany, Netherlands, Canada
            </li>
          </ul>
        </section>

        <section className="card-section">
          <h2>🎯 Who Should Join?</h2>
          <ul>
            <li>Final-year students (BCA, B.Tech, BSc CS, BBA)</li>
            <li>Freshers & Job Seekers</li>
            <li>Career Switchers from Non-IT Fields</li>
            <li>Freelancers looking to upskill in frontend</li>
          </ul>
        </section>

        <section className="card-section">
          <h2>✨ Course Highlights:</h2>
          <ul>
            <li>100% Live Training (No Recordings)</li>
            <li>Code Reviews & One-on-One Doubt Support</li>
            <li>Real-Time Projects with Portfolio Building</li>
            <li>Placement Assistance + HR Interview Prep</li>
            <li>GitHub Profile + Resume Polishing</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          📢 Don’t just learn — become job-ready. <br />
          This is your roadmap to a global tech career, and the time to start is{" "}
          <strong>now</strong>.
        </p>
        <p>
          For brochure, fees, and enrollment: <br />
          📩 WhatsApp: <strong>+91 9971935003</strong>
        </p>
        <p>
          <strong>Team Alpha Bizz Careers</strong>
          <br />
          Shaping Skills. Launching Careers.
        </p>
      </footer>
    </div>
  );
}
