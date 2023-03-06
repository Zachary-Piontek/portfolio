import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
      <div className="contact-box">
        <span>
          <h1>Contact</h1>
          <p>Phone: 123-456-7890</p>
          <p>Email:</p>
          <p>LinkedIn:</p>
          <p>GitHub:</p>
        </span>
      </div>
    </motion.div>
  );
};

export default Contact;
