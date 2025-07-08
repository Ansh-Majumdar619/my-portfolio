"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export default HeroParallaxDemo;

export const products = [
  {
    title: "React.js",
    link: "https://reactjs.org",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "Node.js",
    link: "https://nodejs.org",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  {
    title: "Express.js",
    link: "https://expressjs.com",
    thumbnail: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
  {
    title: "MongoDB",
    link: "https://mongodb.com",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
    thumbnail:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    title: "Bootstrap",
    link: "https://getbootstrap.com",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    title: "GSAP",
    link: "https://greensock.com/gsap/",
    thumbnail: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    title: "Framer Motion",
    link: "https://www.framer.com/motion/",
    thumbnail: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    title: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];
