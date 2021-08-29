import React from "react";
import "../assets/css/community.css";
import Nairuby from "../assets/images/ruby.png";
import GDG from "../assets/images/gdg.jpeg";
import Luxtech from "../assets/images/luxtech.jpeg";

function Community() {
  return (
    <div className="community-details" id="communities">
      <h1>Tech Communities</h1>
      <div className="main-community">
        <section className="community-content">
          <img src={Nairuby} alt="Nairuby"></img>
          <h2>Nairuby</h2>
          <p>
            Nairuby is a Nairobi based group of Ruby programmers where we
            welcome all programmers and aim to promote software development
            skills, entrepreneurship and open source culture.
          </p>
        </section>
        <section className="community-content">
          <img src={GDG} alt="GDG Nairobi"></img>
          <h2>GDG Nairobi</h2>
          <p>
            GDG Nairobi is open and volunteer geek community where we create
            exciting projects and share experience about Google technologies
            with passion.
          </p>
        </section>
        <section className="community-content">
          <img src={Luxtech} alt="LuxTech Academy"></img>
          <h2>LuxTech Academy</h2>
          <p>
            Lux Tech Academy is a community where software developers come
            together and help each other grow in their tech journey through
            organizing tech conferences and training bootcamps
          </p>
        </section>
      </div>

      <p class="text-center text-white font-space_mono text-xs mt-4">
        Created by &copy;Keneth Kogi 2021
      </p>
    </div>
  );
}

export default Community;
