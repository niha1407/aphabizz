// FlyingIconsBackground.js
import React from "react";
import "./styles.css";

const icons = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    // { name: "TailwindCSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  ];
  

const NUM_ICONS = 200; 

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function FlyingIconsBackground() {
  // Create an array of icons with random positions and animation delays/durations
  const flyingIcons = new Array(NUM_ICONS).fill(null).map((_, i) => {
    const icon = icons[i % icons.length];
    return {
      id: i,
      name: icon.name,
      url: icon.url,
      // random initial position in viewport %
      top: getRandom(0, 100),
      left: getRandom(0, 100),
      // random animation duration between 10 and 25 seconds
      duration: getRandom(15, 25),
      // random animation delay to spread animations start times
      delay: getRandom(0, 20),
      size: getRandom(24, 48), // icon size px
    };
  });

  return (
    <div className="flying-icons-background" aria-hidden="true">
      {flyingIcons.map(({ id, url, top, left, duration, delay, size }) => (
        <img
          key={id}
          src={url}
          alt=""
          className="flying-icon"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            width: size,
            height: size,
          }}
        />
      ))}
    </div>
  );
}

export default FlyingIconsBackground;
