import React, { useState } from "react";
import "../assets/css/Navbar.css";
import kogi from "../assets/images/kogi.png";

function Navbar() {
  const [burger, setBurger] = useState(false);
  const handleToggle = () => {
    setBurger((prev) => !prev);
  };

  return (
    <div className="navbar-wrapper" id="home">
      <img src={kogi} alt="kogi dev" />
      <button class="toggle-button" onClick={handleToggle}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul className={`${burger ? "button-toggle " : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
