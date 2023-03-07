import React from "react";
import "./resume.css";
import resumeImage from "./Resume-Feb20_2023.jpg";

export const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <section>
        <img className="resume-image" src={resumeImage} alt="Resume" />
      </section>
    </div>
  );
};
