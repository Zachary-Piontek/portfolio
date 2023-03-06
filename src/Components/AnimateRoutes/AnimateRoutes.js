import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Contact from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import Projects from "../Projects/Projects";
import { About } from "../About/About";
import "./animateroutes.css";

const AnimateRoutes = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  return (
    <div className="routes-container">
      <Routes
        className={
          location.state && location.state.from === "projects"
            ? "slide-right"
            : "slide-left"
        }
      >
        <Route path="/" element={<LandingPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AnimateRoutes;
