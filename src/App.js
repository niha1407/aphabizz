import React, { useState, useRef } from "react";
import "./styles.css";

const sections = [
  {
    title: "🚀 Why Learn React JS?",
    content:
      "React JS is one of the most powerful and in-demand frontend frameworks in the world, trusted by companies like Meta, Netflix, Uber, and Airbnb. Learning React JS opens doors to global opportunities — whether it’s a job in a top MNC, a freelance career abroad, or building your own tech startup."
  },
  {
    title: "📚 What You'll Master:",
    content: `• Core JavaScript + ES6\n• React Components, Hooks, Routing\n• Redux for State Management\n• HTML/CSS basics\n• Responsive Design, Git & GitHub\n• Resume + Interview Prep\n• Live Industry-Level Projects`
  },
  {
    title: "💼 Career Growth Path:",
    content: `For Freshers (0–1 Year):\nRoles: Frontend Developer / React JS Developer\nSalary: ₹3–6 LPA (India) | $10–20/hr (Freelance)\n\n2–5 Years Experience:\nRoles: Full Stack Dev / Software Engineer\nSalary: ₹8–12 LPA | $25–40/hr or $5000+/month (Remote)\n\n6+ Years Experience:\nRoles: Tech Lead / Solution Architect\nSalary: ₹15–25+ LPA | $7000–$12,000/month (Global Contracting)`
  },
  {
    title: "🌍 Global Scope:",
    content: `• Remote Job Options in USA, UK, Canada, UAE\n• High-paying freelance gigs on Upwork, Fiverr, Toptal\n• International relocation scope: Germany, Netherlands, Canada`
  },
  {
    title: "🎯 Who Should Join?",
    content: `• Final-year students (BCA, B.Tech, BSc CS, BBA)\n• Freshers & Job Seekers\n• Career Switchers from Non-IT Fields\n• Freelancers looking to upskill in frontend`
  },
  {
    title: "✨ Course Highlights:",
    content: `• 100% Live Training (No Recordings)\n• Code Reviews & One-on-One Doubt Support\n• Real-Time Projects with Portfolio Building\n• Placement Assistance + HR Interview Prep\n• GitHub Profile + Resume Polishing`
  },
  {
    title: "📩 Contact Us",
    content: `Don’t just learn — become job-ready.\nThis is your roadmap to a global tech career, and the time to start is now.\n\nFor detailed brochure, fee structure, and limited-seat enrollment:\n📩 Reply to this mail or connect on WhatsApp: +91 9971935003\n\nWarm regards,\nTeam Alpha Bizz Careers\nShaping Skills. Launching Careers.`
  }
];

function CodeBackground() {
  const codeLine = `const hello = "React Rocks!"; // Learn and build  `;
  const repeatedLine = codeLine.repeat(1000);
  const lines = Array(1000).fill(repeatedLine);

  return (
    <div className="code-background" aria-hidden="true">
      {lines.map((line, index) => (
        <pre
          key={index}
          style={{
            margin: 0,
            padding: 0,
            whiteSpace: "nowrap",
            animation: "scrollCode 60s linear infinite",
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {line}
        </pre>
      ))}
    </div>
  );
}

export default function App() {
  const [showInfo, setShowInfo] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const infoRef = useRef(null);

  const handleLaunchClick = () => {
    setShowInfo(true);
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to ensure section is rendered
  }
  
  return (
    <>
      <CodeBackground />
      <div className="app-container">
        <header className="hero">
          <div className="hero-text">
            <h1 className="glow-title">
              MASTER REACT JS
              <br />
              WITH HANDS-ON PROJECTS
            </h1>
            <p className="subtext">Start Building with React Today</p>
            <button className="cta-button" onClick={handleLaunchClick}>
              Launch My Career
            </button>
          </div>
          <div className="react-icon" />
        </header>

        { (
          <section ref={infoRef} className="info-section">
            <h2 className="section-title">
              Launch Your Tech Career with React JS – Live Training by Industry Expert MNC Engineer
            </h2>
            <p className="glow-paragraph">
              <strong>Dear</strong>
              <br />
              Are you ready to launch a high-paying tech career in just <em>5 months</em>?
              <br />
              <br />
              <strong>Alpha Bizz Careers</strong> is proud to introduce our <strong>React JS Live Training Program</strong>, led by an MNC Software Engineer with a ₹35.5 LPA package and over 6 years of real-world experience.
            </p>

            <div className="faq-section">
              {sections.map((section, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`cta-button faq-button ${activeIndex === index ? "active" : ""}`}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    {section.title}
                  </button>
                  {activeIndex === index && (
                    <div className="faq-content">
                      {section.content.split("\n").map((line, idx) => (
                        <p key={idx} className="glow-paragraph">{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
