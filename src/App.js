import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import FlyingIconsBackground from "./FlyingIconsBackground";
import LogoSVG from "./Logo";
import ReviewsCarousel from "./ReviewsCarousel";
import FAQ from "./FAQ";

const sections = [
  {
    title: "🚀 Why Learn React JS in the Age of AI?",
    content:
      "React JS powers the world’s most popular apps — from Facebook, Instagram, and Netflix to Uber and beyond.\n\nBut in 2025, companies want **frontend devs who can connect AI APIs like ChatGPT or Gemini** into beautiful UIs.\n\nWith React, you can:\n\n- 🔧 Build modern, high-performance user interfaces\n- 🧠 Create AI-powered frontends without coding AI\n- 🌍 Unlock global remote and MNC job opportunities\n- 💼 Build projects for freelance, startups, and portfolios"
  },
  {
    title: "✨ Why Join This Course?",
    content:
      "Forget boring recorded tutorials. This is a 100% Live, Hands-On React JS Program — designed to make you job-ready in just 5 months.\n\nLed by a Senior Engineer at a top MNC (₹36 LPA), you’ll master:\n\n- ✅ Real-world React projects\n- 🧠 Bonus: AI-Enhanced App Projects (ChatGPT UI, AI forms)\n- 📄 Resume & LinkedIn strategy\n- 🎯 Interview prep & mock sessions\n\nWe don’t just teach — we mentor you toward a high-paying job or freelance career."
  },
  {
    title: "📚 What You'll Master",
    content:
      "- 🧠 Core JavaScript + ES6 — Foundation of modern dev\n- ⚛️ React Components, Hooks & Routing\n- 🔄 Redux for State Management\n- 🎨 HTML & CSS — Responsive, mobile-first designs\n- 🛠️ Git & GitHub — Version control like a pro\n- 🤖 Connect React to AI APIs (ChatGPT, Gemini, DALL·E)\n- 🚀 Real-World Projects — Full-stack portfolio apps\n- 📝 Resume + Interview training for real jobs"
  },
  {
    title: "🤖 Bonus: Build AI-Enhanced Apps with React",
    content:
      "You don’t need to know machine learning to work in AI.\n\nIn this course, you’ll learn how to connect your React apps to powerful AI services like OpenAI and Google Gemini.\n\nYou’ll build projects like:\n\n- 💬 ChatGPT-style chatbot UI using OpenAI API\n- 🧠 Auto-suggest and summarize forms using AI\n- 🖼️ Image generation UI using DALL·E\n\nStand out with React + AI-enabled apps — even without writing a single line of AI code."
  },
  {
    title: "💼 Career Growth Path",
    content:
      "🌱 Freshers (0–1 Year)\nRole: React Developer / Frontend Dev\nEarnings: ₹3–6 LPA | $10–20/hr (Freelance)\n\n🌿 2–5 Years\nRole: Full Stack Developer / Software Engineer\nEarnings: ₹8–12 LPA | $25–40/hr (Remote)\n\n🌳 6+ Years\nRole: Tech Lead / Solution Architect\nEarnings: ₹15–25 LPA | $7000–$12,000/month (Global Contracting)"
  },
  {
    title: "🌍 Global Career Scope",
    content:
      "- 💼 Remote Jobs in USA, UK, Germany, Canada, UAE\n- 💸 High-paying freelance work via Upwork, Toptal\n- ✈️ Relocation Opportunities to tech hubs\n- 📈 Growing demand for AI-aware frontend devs"
  },
  {
    title: "🎯 Who Should Join?",
    content:
      "- 🎓 Final-year B.Tech/BCA/CS students\n- 🧑‍🎓 Fresh graduates breaking into tech\n- 🔁 Working pros switching to dev roles\n- 💼 Freelancers wanting frontend mastery\n- 🤖 Anyone who wants to build AI-connected UIs"
  },
  {
    title: "✨ Course Highlights",
    content:
      "- 🧑‍🏫 100% Live Instructor-Led Sessions\n- 🛠️ Real Projects + Weekly Code Reviews\n- 💬 ChatGPT-like UI Project with OpenAI\n- 📝 Resume, GitHub & LinkedIn Optimization\n- 🎯 Placement Help + Mock Interviews\n- 👨‍💼 Mentorship from a ₹36 LPA MNC Engineer\n- ♾️ Lifetime Access to Learning Community"
  },
  {
    title: "📩 Contact Us",
    content:
      "🔥 Don't get left behind — AI is changing everything.\n\nReact is your fastest path into tech + AI-powered apps.\n\n📩 Message us or connect on WhatsApp: +91 9971935003\n\nFor brochure, fee details, and limited seat booking:\nTeam Alpha Bizz Careers\nShaping Skills. Launching Careers."
  }
];
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
          <div className="logo-container">
            <LogoSVG />
          </div>
        </div>

        <header className="hero" id="top">
          <div className="hero-text">
            <h1 className="glow-title">
            <h1 className="glow-title">
            <h1 className="glow-title">
  LEARN REACT JS<br />AND LEARN TO USE AI TO WRITE CODE LIKE A PRO
</h1>
</h1>
            </h1>
            <p className="subtext">Frontend meets the future — no AI coding required</p>
            <button className="cta-button" onClick={handleLaunchClick}>
              Launch My Career
            </button>
          </div>
        </header>

        <section ref={infoRef} className="info-section">
          <h2 className="section-title">
            Learn React JS Live from an MNC Engineer — Build Real Projects + AI Frontends
          </h2>
          <p className="glow-paragraph">
            Alpha Bizz Careers presents a practical React JS training program — with expert guidance, job prep, and real-world projects. You’ll also learn to build ChatGPT-style UIs using AI APIs — even if you don’t write a single line of AI code.
          </p>
          <section className="info-section instructor-section">
  <h2 className="section-title">🎓 Meet Your Instructor</h2>
  <div className="instructor-card">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQFtgsbxunNKpQ/profile-displayphoto-shrink_400_400/B56Zb8P4z6HUAk-/0/1747988746969?e=1755734400&v=beta&t=kiPOnS0F5yas58VpOce1Cj89jZgYpq6BkScMiCSNFCU"
      alt="Niharika - React Instructor"
      className="instructor-photo"
    />
    <div className="instructor-info">
      <p className="glow-paragraph">
        <strong>Niharika</strong> is a <strong>Senior Software Development Engineer at Stewart Title (USA)</strong> with over <strong>7 years of experience</strong> in frontend and full-stack development.
      </p>
      <p className="glow-paragraph">
        She leads enterprise-grade React JS projects and AI-integrated UIs for global platforms. Her current package is <strong>₹36 LPA</strong>.
      </p>
      <p className="glow-paragraph">
        In this live program, she will mentor you to build high-quality React apps and use tools like <strong>ChatGPT</strong> and <strong>GitHub Copilot</strong> to code faster, debug smarter, and stand out in job interviews.
      </p>
    </div>
  </div>
</section>

          <FAQ
            sections={sections}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </section>

        <section className="reviews-section">
          <ReviewsCarousel />
        </section>

        <section className="form-section">
  <h2 className="section-title">📥 Enroll Your Interest</h2>
  <p className="glow-paragraph">
    Fill in your details and we’ll send you the brochure, fees, and enrollment process.
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
    <p className="glow-paragraph" style={{ marginTop: "20px" }}>
  📍 <strong>Address:</strong> Survey No.133/2, Behind Embassy Tech Village Outer Ring Road, Bengaluru
 
</p>

    <button type="submit" className="cta-button">
      Submit Details
    </button>
  </form>
</section>

{showThankYou && (
  <section id="thankyou" className="form-section" ref={thankYouRef}>
    <h2 className="section-title">🎉 Thanks for Submitting!</h2>
    <p className="glow-paragraph">
      We’ve received your details and will contact you soon with the brochure and course info.
    </p>
    <a href="#top" className="cta-button">⬆️ Back to Top</a>
  </section>
)}
      </div>
    </>
  );
}
