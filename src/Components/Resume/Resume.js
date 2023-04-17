import React from "react";
import "./resume.css";
import resumeImage from "./Resume-ZP-ProfileWeb.png";

export const Resume = () => {
  return (
    <div className="resume-container">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <img src="https://img.icons8.com/color/256/html-5.png" alt="HTML" />
        <img src="https://img.icons8.com/color/256/css3.png" alt="CSS" />
        <img src="https://img.icons8.com/color/256/javascript.png" alt="JS" />
        <img
          src="https://img.icons8.com/plasticine/256/react.png"
          alt="React"
        />
        <img src="https://img.icons8.com/color/256/nodejs.png" alt="Node" />
        <img
          src="https://img.icons8.com/color/256/amazon-web-services.png"
          alt="AWS"
        />
        <a
          className="resume-image"
          href={resumeImage}
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
      </div>
    </div>
  );
};
