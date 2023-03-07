import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Contact from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import Projects from "../Projects/Projects";
import { About } from "../About/About";
import "./animateroutes.css";

const AnimateRoutes = () => {
  return (
    <div className="routes-container">
      <Routes>
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
