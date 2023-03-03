import { useState } from "react";
import "./landingpage.css";

const LandingPage = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    setToggleOpen(!toggleOpen);
    setMenuClass(toggleOpen ? "" : "active");
  };

  return (
    <div className={`menu-container ${menuClass}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        <h1>LD</h1>
      </button>
      <li style={{ "--i": 0 }} index="1">
        <a href="/projects">Projects</a>
      </li>
      <li style={{ "--i": 1 }} index="2">
        <a href="/about">About</a>
      </li>
      <li style={{ "--i": 2 }} index="3">
        <a href="/contact">Contact</a>
      </li>
      <li style={{ "--i": 3 }} index="4">
        <a href="/resume">Resume</a>
      </li>
    </div>
  );
};

export default LandingPage;
