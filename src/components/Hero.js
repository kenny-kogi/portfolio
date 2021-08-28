import React from "react";
import "../assets/css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import Banner from "../assets/images/hero.jpg";

function Hero() {
  return (
    <div className="main-hero">
      <div className="line-bar"></div>
      <aside className="side-section">
        <div className="main-section">
          <section className="main-details">
            <h1>Hi</h1>
            <h1>I'm Keneth kogi</h1>
          </section>

          <section className="more-details">
            <p>Software Developer based in Nairobi, Kenya</p>
          </section>
        </div>

        <div className="contact-links">
          <div>
            <a href="https://github.com/kenny-kogi">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/keneth-kogi-mwangi-9732551b1/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/kogii_">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://gmail.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </div>

          <div className="more-buttons">
            <button>Resume</button>
            <button>Contact Me</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
