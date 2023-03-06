import { useState } from "react";
import "./landingpage.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [buttonText, setButtonText] = useState("Click Me");

  const toggleMenu = () => {
    setToggleOpen(!toggleOpen);
    setMenuClass(toggleOpen ? "" : "active");
    setButtonText(toggleOpen ? "Click Me" : "<ZP>");
  };

  // in the return statement, li style is a CSS variable that is set to the index of the li element

  return (
    <motion.div
      className={`menu-container ${menuClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <button className="menu-toggle" onClick={toggleMenu}>
        <h1>{buttonText}</h1>
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
    </motion.div>
  );
};

export default LandingPage;
