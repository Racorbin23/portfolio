import React from "react";
import "./LandingPage.css";

import AllProjects from "../Components/Project/Project";

function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="landing-title">Hi, I'm Randel</div>
      <div className="landing-description">
        I am a self-taught programmer, motivated, and eager to learn with the
        help of my peers.
      </div>
      <div className="landing-project-section-title">Projects</div>
      <div>
        <AllProjects />
      </div>
      <div className="landing-contact">
        <div className="contact-me">Contact me!</div>
        <div className="contacts-wrapper">
          <div
            className="contact-item"
            onClick={() => {
              window.open("mailto:randelcorbin@gmail.com");
            }}
          >
            Randelcorbin@gmail.com
          </div>
          <div
            className="contact-item"
            onClick={() => {
              window.open("https://github.com/Racorbin23");
            }}
          >
            Github
          </div>
          <div
            className="contact-item"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/randel-corbin-938709137/"
              );
            }}
          >
            LinkedIn
          </div>
        </div>
      </div>
      <div className="footer">Made By Randel Corbin 2022</div>
    </div>
  );
}

export default LandingPage;
