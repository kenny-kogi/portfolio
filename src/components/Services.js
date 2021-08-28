import React from "react";
import "../assets/css/service.css";
import Web from "../assets/images/web.jpeg";
import Mobile from "../assets/images/mob.jpeg";
import Desktop from "../assets/images/desktop.jpeg";

function Services() {
  return (
    <div className="service-details" id="services">
      <div className="service-details-content">
        <h1>What i do</h1>
        <div className="more-details">
          <section className="details-card">
            <img src={Web} alt="web development"></img>
            <h2>Web Application</h2>
            <p>
              I provide expert web application development and web design
              services, from creating mobile web development solutions and
              responsive website designs, to building custom e-commerce and
              intranet experiences using the latest and proven web technologies
            </p>
          </section>
          <section className="details-card">
            <img src={Mobile} alt="Mobile development"></img>
            <h2>Mobile Application</h2>
            <p>
              Help your business and brand grow by creating mobile app solutions
              that work seamlessly across all platforms and operating systems:
              smartphone, tablet, laptop, iOS or Android
            </p>
          </section>
          <section className="details-card">
            <img src={Desktop} alt="Desktop development"></img>
            <h2>Desktop Application</h2>
            <p>
              Providing desktop application development skills that can become
              your ground for building the application which will delight your
              customers with the rich functionality, speed of work and
              user-friendly interface.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
