import React, { useMemo } from "react";
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
  { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getIconCount() {
  const isMobile = window.innerWidth < 768;
  return isMobile ? 40 : 150; // reduced on mobile for performance
}

const FlyingIconsBackground = () => {
  const iconData = useMemo(() => {
    const count = getIconCount();

    return new Array(count).fill(null).map((_, i) => {
      const { url } = icons[i % icons.length];
      return {
        id: i,
        url,
        top: getRandom(0, 100),
        left: getRandom(0, 100),
        duration: getRandom(6, 12), // faster movement
        delay: getRandom(0, 5),
        size: getRandom(24, 40)
      };
    });
  }, []);

  return (
    <div className="flying-icons-background" aria-hidden="true">
      {iconData.map(({ id, url, top, left, duration, delay, size }) => (
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
            height: size
          }}
        />
      ))}
    </div>
  );
};

export default FlyingIconsBackground;
