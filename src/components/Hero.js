import React from "react";
import "../assets/css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import Banner from "../assets/images/banner.jpg";

function Hero() {
  return (
    <div className="main-hero">
      <div className="left-section">
        <div className="line-bar"></div>
        <aside className="side-section">
          <div className="main-section">
            <section className="main-details">
              <h1>Hi</h1>
              <h1>I'm Keneth kogi</h1>
              <p>
                Software Developer <br />
                based in Nairobi, Kenya
              </p>
            </section>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/kenny-kogi"
              style={{ color: "#211F1F" }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/keneth-kogi-mwangi-9732551b1/"
              style={{ color: "#0077b5" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/kogii_" style={{ color: "#1DA1F2" }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://gmail.com" style={{ color: "#4285f4" }}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>

            {/* <div className="more-buttons">
              <button>Resume</button>
              <button>Contact Me</button>
            </div> */}
          </div>
        </aside>
      </div>

      <div className="right-section">
        <img src={Banner} alt="hero section" />
      </div>
    </div>
  );
}

export default Hero;
