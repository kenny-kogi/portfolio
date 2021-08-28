import React from "react";
import "../assets/css/community.css";
import Nairuby from "../assets/images/ruby.png";
import GDG from "../assets/images/gdg.png";
import Luxtech from "../assets/images/luxtech.jpeg";

function Community() {
  return (
    <div className="service-details">
      <h1>Communities</h1>
      <div className="more-details">
        <section className="details-card">
          <img src={Nairuby} alt="web development"></img>
          <h2>Nairuby</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </section>
        <section className="details-card">
          <img src={GDG} alt="Mobile development"></img>
          <h2>GDG Nairobi</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </section>
        <section className="details-card">
          <img src={Luxtech} alt="Desktop development"></img>
          <h2>LuxTech Academy</h2>
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

export default Community;
