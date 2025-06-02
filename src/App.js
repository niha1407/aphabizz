import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import FlyingIconsBackground from "./FlyingIconsBackground";
import LogoSVG from "./Logo";
const sections = [
  {
    title: "🚀 Why Learn React JS?",
    content:
      "React JS powers modern web apps used by billions — from Facebook and Instagram to Netflix and Uber. It’s fast, flexible, and scalable — a must-have for frontend developers. With React, you’ll build powerful user interfaces, open global career paths, and stay future-proof in a fast-changing tech world."
  },
  {
    title: "🌟 Why Join This Course?",
    content:
      "Unlike typical recorded courses, this is a **100% Live, Hands-On React JS Training** designed to make you job-ready in just 5 months. Led by a Senior Engineer at an MNC earning ₹35.5 LPA, you'll learn exactly what companies demand — real projects, debugging skills, resume strategy, and interview prep.\n\nWe don’t just teach — we mentor you toward a high-paying job or freelance career.\n\n🎯 Learn. Build. Get Hired."
  },
  {
    title: "📚 What You'll Master:",
    content: `• Core JavaScript + ES6\n• React Components, Hooks, Routing\n• Redux for State Management\n• HTML/CSS for Responsive Design\n• Git & GitHub Version Control\n• Resume Writing & Mock Interviews\n• End-to-End Real Projects for Portfolio`
  },
  {
    title: "💼 Career Growth Path:",
    content: `🌱 Freshers (0–1 Yr):\nFrontend Developer / React JS Dev\n₹3–6 LPA | $10–20/hr (Freelance)\n\n🌿 2–5 Years Experience:\nFull Stack Developer / Software Engineer\n₹8–12 LPA | $25–40/hr or $5000+/month (Remote)\n\n🌳 6+ Years:\nTech Lead / Solution Architect\n₹15–25+ LPA | $7000–$12,000/month (Global Contracting)`
  },
  {
    title: "🌍 Global Scope:",
    content: `• Remote Jobs in USA, UK, Canada, UAE\n• High-Paying Freelance Projects (Upwork, Toptal, Fiverr)\n• Relocation Scope: Germany, Netherlands, Canada\n• Demand across startups and Fortune 500 companies`
  },
  {
    title: "🎯 Who Should Join?",
    content: `• Final-year B.Tech, BCA, BSc-CS, BBA students\n• Fresh Graduates seeking IT jobs\n• Working Professionals switching to Tech\n• Freelancers wanting to specialize in frontend\n• Anyone passionate about coding and building UIs`
  },
  {
    title: "✨ Course Highlights:",
    content: `• 100% Live Instructor-Led Sessions (No Recordings)\n• Weekly Code Reviews & Debugging Help\n• Real Projects for GitHub Portfolio\n• Resume, LinkedIn & GitHub Polishing\n• Placement Assistance + HR Interview Coaching\n• Direct Mentorship from an MNC Engineer\n• Lifetime Access to Resources + Career Community`
  },
  {
    title: "📩 Contact Us",
    content: `🔥 The tech world is evolving fast — don’t get left behind.\nStart your journey toward a global tech career *today*.\n\n📩 Reply to this message or connect on WhatsApp: +91 9971935003\n\nFor brochure, fee structure, and limited-seat enrollment:\nTeam Alpha Bizz Careers\nShaping Skills. Launching Careers.`
  }
];

function CodeBackground() {
  const codeLine = `const hello = "React Rocks!"; // Learn and build  `;
  const repeatedLine = codeLine.repeat(100);
  const lines = Array(100).fill(repeatedLine);

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
            animationDelay: `${index * 0.3}s`
          }}
        >
          {line}
        </pre>
      ))}
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const infoRef = useRef(null);
  const thankYouRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#thankyou") {
      setShowThankYou(true);
    }
  }, []);

  useEffect(() => {
    if (showThankYou) {
      setTimeout(() => {
        thankYouRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [showThankYou]);

  const handleLaunchClick = () => {
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <FlyingIconsBackground />
      <div className="app-container">
      <div className="logo">
   <LogoSVG/>
</div>

        <header className="hero" id="top">
          <div className="hero-text">
            <h1 className="glow-title">
              MASTER REACT JS<br />WITH HANDS-ON PROJECTS
            </h1>
            <p className="subtext">Start Building with React Today</p>
            <button className="cta-button" onClick={handleLaunchClick}>
              Launch My Career
            </button>
          </div>
        </header>

        <section ref={infoRef} className="info-section">
          <h2 className="section-title">
            Launch Your Tech Career with React JS – Live Training by Industry Expert MNC Engineer
          </h2>
          <p className="glow-paragraph">
            <strong>Dear</strong><br />
            Are you ready to launch a high-paying tech career in just <em>5 months</em>?<br /><br />
            <strong>Alpha Bizz Careers</strong> is proud to introduce our <strong>React JS Live Training Program</strong>, led by an MNC Software Engineer with a ₹35.5 LPA package and over 6 years of real-world experience.
          </p>

          {/* <div className="faq-section">
            {sections.map((section, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`cta-button faq-button ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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
          </div> */}
          <div className="faq-section">
  {sections.map((section, index) => {
    const isActive = activeIndex === index;
    return (
      <div key={index} className={`faq-card ${isActive ? "expanded" : ""}`}>
        <button
          className="faq-toggle"
          onClick={() => setActiveIndex(isActive ? null : index)}
        >
          <span>{section.title}</span>
          <span className="icon">{isActive ? "−" : "+"}</span>
        </button>
        <div
          className="faq-content-wrapper"
          style={{
            maxHeight: isActive ? "600px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease"
          }}
        >
          <div className="faq-content">
            {section.content.split("\n").map((line, idx) => (
              <p key={idx} className="glow-paragraph">{line}</p>
            ))}
          </div>
        </div>
      </div>
    );
  })}
</div>

        </section>

        <section className="form-section">
          <h2 className="section-title">📥 Enroll Your Interest
          </h2>
          <p className="glow-paragraph">
            Fill in your details and we’ll reach out with course info, fees, and the brochure.
          </p>
          <form
            className="student-form"
            action="https://formsubmit.co/niharikagoel2019@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://x2pnyd-3000.csb.app/#thankyou" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="Name"
              placeholder="Your Full Name"
              required
              className="form-input"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email Address"
              required
              className="form-input"
            />
            <input
              type="text"
              name="Phone"
              placeholder="WhatsApp Number"
              className="form-input"
            />
            <textarea
              name="Message"
              placeholder="Any questions or preferred time to talk?"
              rows="4"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="cta-button">
              Submit Details
            </button>
          </form>
        </section>

        {showThankYou && (
          <section id="thankyou" className="form-section">
            <h2 className="section-title">🎉 Thanks for Submitting!</h2>
            <p className="glow-paragraph">
              We've received your details and will contact you shortly with the brochure and course info.
            </p>
            <a href="#top" className="cta-button">⬆️ Back to Top</a>
          </section>
        )}
      </div>
    </>
  );
}
