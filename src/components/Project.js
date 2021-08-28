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
          </aside>
        </section>

        <section className="project-detail">
          <aside className="project-aside">
            <h3>Progmatic Book Store</h3>
            <p>
              An E-Store Web platform that allows Programmers shop their
              favourite E-Books and ship them
            </p>
          </aside>
          <img src={Store} alt="Book Store" />
        </section>

        <section className="project-detail">
          <img src={Transact} alt="Transact" />
          <aside className="project-aside">
            <h3>Desktop Transaction System</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </aside>
        </section>
        <section className="project-detail">
          <aside className="project-aside">
            <h3>Personal Website</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </aside>
          <img src={Portfolio} alt="Book Store" />
        </section>
      </div>
    </div>
  );
}

export default Project;
