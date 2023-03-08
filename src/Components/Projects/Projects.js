import React from "react";
import "./projects.css";
import chromeSays from "./ChromeSays.png";
import petStore from "./Petstore.png";
import cryptoWarfare from "./CryptoWarfare.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-box">
        <div className="projects-content">
          <h2>CryptoWarfare</h2>
          <p>Track your future wealth</p>
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
          <h2>Petstore</h2>
          <p>Basic CRUD operations using AWS Amplify with Auth</p>
          <a
            href="https://main.d3pqwsrvh31zrd.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={petStore} alt="pet store" />
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
