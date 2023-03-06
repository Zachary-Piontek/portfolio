import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      Projects
    </motion.div>
  );
};

export default Projects;
