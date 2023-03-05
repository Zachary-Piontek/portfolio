import React from "react";
import { motion } from "framer-motion";
import "./about.css";

export const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
      About
    </motion.div>
  );
};
