import React, { useState } from "react";
import "../assets/css/Navbar.css";
import kogi from "../assets/images/kogi.png";

function Navbar() {
  const [burger, setBurger] = useState(false);
  const handleToggle = () => {
    setBurger((prev) => !prev);
  };

  return (
    <div className="navbar-wrapper">
      <img src={kogi} alt="kogi dev" />
      <button class="toggle-button" onClick={handleToggle}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul className={`${burger ? "button-toggle " : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#home">Projects</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
