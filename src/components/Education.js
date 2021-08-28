import React from "react";
import "../assets/css/education.css";

function Education() {
  return (
    <div className="main-education">
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
            Andela Learning Community (ALC) is an intensive scholarship
            programme by Andela, Pluralsight and Google, where qualified high
            potential and proactive students learn to be worldclass android
            developers and are awarded Google Android Certification upon passing
            the final examination.
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
            I am currently undertaking an undergraduate degree in BSc. Computer
            Science. I am majoring in Software Development because it is awesome
            having the ability to create anything within your imagination to
            change the community for the better.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
