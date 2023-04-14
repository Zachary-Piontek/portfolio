import React from "react";
import "./projects.css";
import news from "./PhilippineNews.png";
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
            href="https://newdetails.d3fh9ibto9nca8.amplifyapp.com/"
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
          <h2>The Philippine Sun</h2>
          <p>News around the Philippines</p>
          <a
            href="https://thephilippinesun.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={news} alt="chrome says" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
