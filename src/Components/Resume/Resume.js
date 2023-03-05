import React from "react";
import { motion } from "framer-motion";
import "./resume.css";

export const Resume = () => {
  return (
    <motion.div
      className="resume-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      Resume
    </motion.div>
  );
};
