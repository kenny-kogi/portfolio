import React from "react";
import "../assets/css/about.css";
import kenny from "../assets/images/kenny.jpeg";

function About() {
  return (
    <div className="main-about" id="about">
      <div className="main-about-section">
        <img src={kenny} alt="Kogi" />
        <section className="profile">
          <h1>About Me</h1>
          <section className="">
            <p>
              I'm a passionate techy skilled in mobile and web development for
              different kinds of services. Useful knowledge with high-level
              programming by using different technologies. I am more focused on
              back-end technologies but also have experience with the latest
              front-end technologies. My goal is to always put the principles of
              Computer Science and Software Engineering into practice. Also, a
              very passionate learner by voluntarily constant reading,
              exercising and working in various fields/subjects
            </p>
            <div className="resume">{/* <button>Resume</button> */}</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default About;
