import React, { useState } from "react";
import "./styles.css";



// FAQ.jsx

export default function FAQ({ sections, activeIndex, setActiveIndex }) {
  return (
    <div className="faq-section">
      <h2 className="section-title">Course Q&A</h2>
      <div className="faq-grid">
        {sections.map((section, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className={`faq-card ${isActive ? "expanded" : ""}`}>
              <button
                className="faq-toggle"
                onClick={() => setActiveIndex(isActive ? null : index)}
                aria-expanded={isActive}
                aria-controls={`faq-content-${index}`}
                id={`faq-toggle-${index}`}
              >
                <span>{section.title}</span>
                <span className="icon">{isActive ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-toggle-${index}`}
                className="faq-content-wrapper"
                style={{
                  maxHeight: isActive ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease"
                }}
              >
                <div className="faq-content" style={{ padding: isActive ? "1rem" : "0 1rem" }}>
                  {section.content.split("\n").map((line, idx) => (
                    <p key={idx} className="glow-paragraph">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
