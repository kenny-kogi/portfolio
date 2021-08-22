import React from "react";
import "../assets/css/Navbar.css";
import kogi from "../assets/images/kogi.png";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <img src={kogi} alt="kogi dev" />
      <button class="burger" id="burger">
        &#9776
      </button>

      <ul>
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
