import React from "react";
import "./projects.css";
import chromeSays from "./ChromeSays.png";
import cryptoWarfare from "./CryptoWarfare.png";
import rankaroo from "./Rankaroo.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-box">
        <div className="projects-content">
          <h2>CryptoWarfare</h2>
          <p>Track your future crypto wealth</p>
          <a
            href="https://details.dq8jw5s2otf2n.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cryptoWarfare} alt="crypto warfare" />
          </a>
        </div>
      </div>
      <div className="projects-box">
        <div className="projects-content">
          <h2>Rankaroo</h2>
          <p>Movie Database Ranker</p>
          <a href="https://rankaroo.org/" target="_blank" rel="noreferrer">
            <img src={rankaroo} alt="pet store" />
          </a>
        </div>
      </div>
      <div className="projects-box">
        <div className="projects-content">
          <h2>Chrome Says</h2>
          <p>A faster game than simon says</p>
          <a
            href="https://chrome-says.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={chromeSays} alt="chrome says" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
