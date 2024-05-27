import React from "react";
import Marquee from "react-marquee-slider";
import html from "./images/2284975.webp";
import css from "./images/css-3.svg";
import js from "./images/js-logo-png-5.webp";
import tailwindcss from "./images/tailwind-css-logo-5AD4175897-seeklogo.com.webp";
import bootstrapIcone from "./images/bootstrap-5-logo-icon.svg";
import typescript from "./images/TypeScript-logo.webp";
import laravel from "./images/laravel-1.svg";
import reactIcone from "./images/react-2.svg";
import nodejs from "./images/nodejs-new-pantone-white.svg";
import express from "./images/Expressjs-nodejs.webp";
import php from "./images/58481791cef1014c0b5e4994.webp";

function Tech() {
  const techImages = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: js, label: "JavaScript" },
    { src: tailwindcss, label: "Tailwind" },
    { src: bootstrapIcone, label: "Bootstrap" },
    { src: typescript, label: "TypeScript" },
    { src: reactIcone, label: "React" },
    { src: php, label: "PHP" },
    { src: laravel, label: "Laravel" },
    { src: nodejs, label: "Node.js" },
    { src: express, label: "Express.js" },
  ];

  return (
    <div className="mb-20">
      <div className="flex justify-center mt-32">
        <h1 className="nom m-5 text-3xl font-medium border-b border-pink-500">
          Techs
        </h1>
      </div>
      <Marquee gradient={false} speed={60} cycle={0} resetAfterTries={200}>
        {techImages.map((tech, index) => (
          <img
            key={`tech-${index}`}
            src={tech.src}
            alt={tech.label}
            style={{ height: "40px", marginRight: "50px" }}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Tech;
