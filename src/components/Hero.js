import React from "react";
import "../assets/css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="main-hero">
      <div className="line-bar"></div>

      <div className="main-section">
        <section className="main-details">
          <h1>Hi</h1>
          <p>I'm Keneth kogi</p>
        </section>

        <section className="more-details">
          <p>
            A passionate techy focusing mainly <br />
            on web and mobile development based in Nairobi, Kenya
          </p>
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
    </div>
  );
}

export default Hero;
