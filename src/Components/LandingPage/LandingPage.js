import { useState } from "react";
import "./landingpage.css";
import Selfie from "./CartoonSelfie.png";

const LandingPage = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [buttonText, setButtonText] = useState("Click on me!");

  const toggleMenu = () => {
    setToggleOpen(!toggleOpen);
    setMenuClass(toggleOpen ? "" : "active");
    setButtonText(toggleOpen ? "Click on me!" : "");
  };

  // in the return statement, li style is a CSS variable that is set to the index of the li element

  return (
    <div className="landing-container">
      <section className="landing-headline">
        <h1 className="landing-title">Hi, my name Zachary.</h1>
        <h2 className="landing-subtitle">
          And I am a full stack web developer.
        </h2>
      </section>
      <div className={`menu-container ${menuClass}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={Selfie} alt="Zachary P. Selfie" className="selfie" />
          {/* <span className="menu-button-text">{buttonText}</span> */}
        </button>
        <li style={{ "--i": 0 }} index="1">
          <a href="/projects" className="projects-link">
            Projects
          </a>
        </li>
        <li style={{ "--i": 1 }} index="2">
          <a href="/about" className="about-link">
            About
          </a>
        </li>
        <li style={{ "--i": 2 }} index="3">
          <a href="/contact" className="contact-link">
            Contact
          </a>
        </li>
        <li style={{ "--i": 3 }} index="4">
          <a href="/resume" className="resume-link">
            Resume
          </a>
        </li>
      </div>
      <div className="menu-button-text">
        <h2>{buttonText}</h2>
      </div>
    </div>
  );
};

export default LandingPage;
