import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import FlyingIconsBackground from "./FlyingIconsBackground";
import LogoSVG from "./Logo";

const sections = [
  {
    title: "🚀 Why Learn React JS?",
    content:
      "React JS powers the world’s most popular apps — from Facebook, Instagram, and Netflix to Uber and beyond.  \n\nIt’s fast, flexible, and battle-tested — making it the #1 choice for frontend developers.\n\nWith React, you can:\n\n- 🔧 Build high-performance user interfaces\n- 🌍 Unlock global remote and MNC job opportunities\n- 💼 Create real-world apps for your freelance/portfolio\n- 🔒 Stay future-proof in a fast-changing tech world\n\nWhether you’re aiming for a top product company, freelance income, or a tech startup, React is your shortcut to high-impact frontend skills."
  },
  {
    title: "✨ Why Join This Course?",
    content:
      "Forget boring recorded tutorials. This is a 100% Live, Hands-On React JS Program — designed to make you job-ready in just 5 months.\n\nLed by a Senior Engineer at a top MNC (₹35.5 LPA), you’ll master:\n\n- ✅ Real-world React projects\n- 🐞 Debugging & problem-solving\n- 📄 Resume & LinkedIn strategy\n- 🎯 Interview prep & mock sessions\n\nWe don’t just teach — we mentor you toward a high-paying job or freelance career.\n\n🎯 Learn. Build. Get Hired."
  },
  {
    title: "📚 What You'll Master",
    content:
      "In just 5 months, you’ll go from beginner to job-ready with expert-level skills:\n\n- 🧠 Core JavaScript + ES6 — Master the foundation every dev needs\n- ⚛️ React Components, Hooks & Routing — Build modern, dynamic UIs\n- 🔄 Redux for State Management — Manage complex app logic with ease\n- 🎨 HTML & CSS — Create responsive, mobile-first designs\n- 🛠️ Git & GitHub — Collaborate like a pro with version control\n- 📝 Resume Writing & Mock Interviews — Land interviews with confidence\n- 🚀 Real-World Projects — Build full-stack apps for your portfolio\n\nEverything you learn is directly aligned with what top tech companies want."
  },
  {
    title: "💼 Career Growth Path",
    content:
      "See where your journey can take you — from fresh graduate to tech leader:\n\n🌱 Freshers (0–1 Year)\nRole: Frontend Developer / React.js Developer\nEarnings: ₹3–6 LPA | $10–20/hr (Freelance)\n\n🌿 2–5 Years Experience\nRole: Full Stack Developer / Software Engineer\nEarnings: ₹8–12 LPA | $25–40/hr or $5000+/month (Remote)\n\n🌳 6+ Years\nRole: Tech Lead / Solution Architect\nEarnings: ₹15–25 LPA | $7000–$12,000/month (Global Contracting)"
  },
  {
    title: "🌍 Global Career Scope",
    content:
      "Unlock global opportunities and work without borders:\n\n- 💼 Remote Jobs in top tech markets like the India, USA, UK, Canada, UAE\n- 💸 High-paying freelance projects via Upwork, Toptal, Fiverr\n- ✈️ Relocation Opportunities to tech hubs in Germany, Netherlands, Canada\n- 📈 Global demand from startups to Fortune 500 companies"
  },
  {
    title: "🎯 Who Should Join?",
    content:
      "This program is ideal for:\n\n- 🎓 Final-year students in B.Tech, BCA, BSc-CS, BBA or related fields\n- 🧑‍🎓 Fresh graduates looking to break into the IT industry\n- 🔁 Working professionals transitioning into tech roles\n- 💼 Freelancers eager to specialize in frontend development\n- 💡 Anyone passionate about coding and building intuitive UIs"
  },
  {
    title: "✨ Course Highlights",
    content:
      "- 🧑‍🏫 100% Live Instructor-Led Sessions (No recordings – fully interactive)\n- 🔍 Weekly Code Reviews and personalized Debugging Assistance\n- 💻 Hands-on Projects to showcase on your GitHub portfolio\n- 📝 Resume, LinkedIn & GitHub Optimization for better visibility\n- 🎯 Placement Assistance + HR Interview Preparation\n- 👨‍💼 Direct Mentorship from an experienced MNC Engineer\n- ♾️ Lifetime Access to learning resources & a thriving Career Community"
  },
  {
    title: "📩 Contact Us",
    content:
      "🔥 The tech world is evolving fast — don’t get left behind.\nStart your journey toward a global tech career today.\n\n📩 Reply to this message or connect on WhatsApp: +91 9971935003\n\nFor brochure, fee structure, and limited-seat enrollment:\nTeam Alpha Bizz Careers\nShaping Skills. Launching Careers."
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
        <div className="logo highlight-logo">
          <LogoSVG />
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
            Launch Your Tech Career with React JS – Live Training by a 36 LPA MNC Expert
          </h2>
          <p className="glow-paragraph">
            Alpha Bizz Careers presents an intensive React JS Live Training Program, taught by an MNC Software Engineer earning ₹36 LPA with 6+ years of real-world experience. Start your journey from beginner to job-ready React Developer — with live classes, expert mentorship & hands-on projects.
          </p>

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
          <h2 className="section-title">📥 Enroll Your Interest</h2>
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
