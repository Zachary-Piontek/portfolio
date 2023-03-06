import React from "react";
import "./contact.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <span>
          <h1>Contact</h1>
          <p>
            <AiOutlineMail />
            <a href="_black">Email</a>
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
    </div>
  );
};

export default Contact;
