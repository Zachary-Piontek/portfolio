import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="contact-box">
        <span>
          <h1>Contact</h1>
          <p>
            <AiOutlineMail />
            <a>Email</a>
          </p>
          <p>
            <AiFillLinkedin />
            <a
              href="https://www.linkedin.com/in/zacharypiontek/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <AiFillGithub />
            <a
              href="https://github.com/Zachary-Piontek"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </span>
      </div>
    </motion.div>
  );
};

export default Contact;
