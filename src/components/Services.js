import React from "react";
import "../assets/css/service.css";
import Web from "../assets/images/web.jpeg";
import Mobile from "../assets/images/mob.jpeg";
import Desktop from "../assets/images/desktop.jpeg";

function Services() {
  return (
    <div className="service-details">
      <h1>What i do</h1>
      <div className="more-details">
        <section className="details-card">
          <img src={Web} alt="web development"></img>
          <h2>Web Application</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </section>
        <section className="details-card">
          <img src={Mobile} alt="Mobile development"></img>
          <h2>Mobile Application</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </section>
        <section className="details-card">
          <img src={Desktop} alt="Desktop development"></img>
          <h2>Desktop Application</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services;
