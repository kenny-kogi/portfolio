import React from "react";
import "../assets/css/skills.css";
import ReactJS from "../assets/images/react-js.svg";
import CSS from "../assets/images/css.svg";
import Ruby from "../assets/images/ruby.svg";
import Github from "../assets/images/github.svg";
import Java from "../assets/images/java.svg";
import Banner from "../assets/images/skill.jpg";
import HTML from "../assets/images/html.svg";
import ROR from "../assets/images/ruby-on-rails.svg";
import CSHARP from "../assets/images/c-sharp.svg";
import Flutter from "../assets/images/flutter.svg";
import Git from "../assets/images/git.svg";
import PostgrasQl from "../assets/images/postgresql.svg";
import Mysql from "../assets/images/mysql.svg";

function Skills() {
  return (
    <div className="skill-container">
      <div className="skill-banner">
        <img src={Banner} alt="Skill Banner" />
      </div>
      <div className="stack-imgs">
        <img src={HTML} alt="HTML" />
        <img src={CSS} alt="CSS" />
        <img src={ReactJS} alt="ReactJS" />
        <img src={ROR} alt="Ruby on Rails" />

        <img src={Java} alt="Java" />
        <img src={CSHARP} alt="C#" />
        <img src={Ruby} alt="Ruby" />
        <img src={Flutter} alt="Flutter" />

        <img src={Github} alt="Github" />
        <img src={PostgrasQl} alt="Postqresql" />
        <img src={Git} alt="Git" />
        <img src={Mysql} alt="MySQL" />
      </div>
    </div>
  );
}

export default Skills;
