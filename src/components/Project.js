import React from "react";
import "../assets/css/project.css";
import Akili from "../assets/images/akili.png";
import Store from "../assets/images/Bookshelf.png";
import Portfolio from "../assets/images/portfolio.png";
import Food from "../assets/images/food.png";
import Transact from "../assets/images/transfer.png";
import House from "../assets/images/house.png";

function Project() {
  return (
    <div className="main-project" id="projects">
      <h1>My Projects</h1>
      <div className="project-content">
        <section className="project-detail">
          <img src={Akili} alt="Akili Writing Hub" />
          <aside className="project-aside">
            <h3>Akili Writing Hub</h3>
            <p>
              Akili Writing Hub is a web platform that aims to breach the gap
              between online writers and their prospective customers, by
              providing an easier way of advertising their services and
              communication
            </p>
            <section className="tags-link">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>

              <a href="https://master--akili-writing-hub.netlify.app/">View</a>
            </section>
          </aside>
        </section>
        <section className="project-detail">
          <aside className="project-aside">
            <h3>Food App UI</h3>
            <p>
              Food App UI is a cross platform application developed using the
              google framework (Flutter), that allows its users to skim a list
              of available foods and make an order
            </p>
            <section className="tags-link">
              <ul>
                <li>Flutter</li>
              </ul>

              <a href="https://github.com/kenny-kogi/NutritionApp-Flutter">
                View
              </a>
            </section>
          </aside>
          <img src={Food} alt="Food App" />
        </section>
        <section className="project-detail">
          <img src={House} alt="house api" />
          <aside className="project-aside">
            <h3>House Review API</h3>
            <p>
              API developed using Ruby on Rails, which after integration to a
              Home renting service, will allow users of the system have the
              capability to leave a review of different homes and display them.
            </p>
            <section className="tags-link">
              <ul>
                <li>Ruby on Rails</li>
                <li>PostgresQL</li>
                <li>ReactJS</li>
              </ul>

              <a href="https://github.com/kenny-kogi/House-Review">View</a>
            </section>
          </aside>
        </section>

        <section className="project-detail">
          <aside className="project-aside">
            <h3>Progmatic Book Store</h3>
            <p>
              An E-Store Web platform that allows Programmers add to cart their
              favourite E-Books, order and allow different forms of payment.
              (CRUD App)
            </p>
            <section className="tags-link">
              <ul>
                <li>HTML</li>
                <li>Saas</li>
                <li>Mysql</li>
                <li>Ruby on Rails</li>
              </ul>

              <a href="https://github.com/kenny-kogi/Progmatic-Book-Store">
                View
              </a>
            </section>
          </aside>
          <img src={Store} alt="Book Store" />
        </section>

        <section className="project-detail">
          <img src={Transact} alt="Transact" />
          <aside className="project-aside">
            <h3>Integrated Transaction System</h3>
            <p>
              A desktop application, developed to aid SMEs to reduce their daily
              operational cost by providing features such as point of sale
              system, book keeping and inventory management.
            </p>
            <section className="tags-link">
              <ul>
                <li>C#</li>
                <li>Mysql</li>
                <li>Bunifu</li>
              </ul>

              <a href="https://github.com/kenny-kogi/C---Transaction-System">
                View
              </a>
            </section>
          </aside>
        </section>
        <section className="project-detail">
          <aside className="project-aside">
            <h3>Portfolio Website</h3>
            <p>
              A simple website developed to allow my fellow developers show case
              their profile, achievement, tech journey, skills and milestone
              projects etc
            </p>
            <section className="tags-link">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
              </ul>

              <a href="https://master--akili-writing-hub.netlify.app/">View</a>
            </section>
          </aside>
          <img src={Portfolio} alt="Book Store" />
        </section>
      </div>
    </div>
  );
}

export default Project;
