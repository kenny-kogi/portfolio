import React from "react";
import "../assets/css/education.css";

function Education() {
  return (
    <div className="main-education" id="education">
      <div className="education main-education-content" id="education">
        <h1>Education</h1>

        <div class="edu">
          <span class="school">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            Google Africa Developer Scholarship
          </span>
          <span class="course">
            <i class="fa fa-book" aria-hidden="true"></i>
            Mobile Web Specialist
          </span>

          <span class="date">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            April 2021 - Present
          </span>
          <p class="description">
            GADS is a programme by Andela in partnership with Google and
            Pluralsight, where they aim to engage with existing and aspiring
            developers to help them build the skills they need to get a job in
            tech and also provide mentorship.
          </p>
        </div>
        <div class="edu">
          <span class="school">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            Africa Nazarene University, Nairobi, Kenya
          </span>
          <span class="course">
            <i class="fa fa-book" aria-hidden="true"></i>
            BSc. Computer Science
          </span>

          <span class="date">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            Sep 2018 - Present
          </span>
          <p class="description">
            I am currently pursuing my undergrad degree in BSc. Computer
            Science. I'm focusing in software development because it's amazing
            to be able to create anything you can think of in order to solve
            problems faced in the community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
