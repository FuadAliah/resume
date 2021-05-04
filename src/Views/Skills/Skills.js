import React, { Component } from "react";
import Skill from "../../Components/Skill/Skill";

import "./Skills.scss";

class Skills extends Component {
  state = {
    skills: [
      {
        id: 1,
        title: "Frontend skills",
        text:
          "HTML5, CSS3, SASS, JQuery, Bootstrap 3, 4 & 5, AJAX, Javascript, ES6, VueJs, ReactJS, Redux(Basic Knowledge), Axios, Fetch API, JSON, Git, Design Slicing, Web Performance, Cross-browser Compatibility, Web Standards, W3C Validation & Design Responsive.",
      },
      {
        id: 2,
        title: "Design skills",
        text: "UX Research, Collaboration, Wireframing, UI Prototyping, Visual Communication, User Empathy, Communication skills & Analytics",
      },
      {
        id: 3,
        title: "Software skills",
        text: "Sketch, Principle, Figma, Invision Studio, Adobe XD, Illustrator, Photoshop, Sublime and Visual Studio.",
      },
      {
        id: 4,
        title: "Language",
        text: "Arabic [Mother Language], English [Good Writing, Listening & Speaking]",
      },
      {
        id: 5,
        title: "Education",
        text: "Graphic Design - Training Course [AL-Quds Collage]",
      },
      {
        id: 6,
        title: "Training Courses",
        text: "JAVASCRIPT (ES6), JQUERY, SASS, Bootstrap 3 & 4, Axios, Fetch API, AJAX, Git & JS Framewoks (React, Vue)",
      },
    ],
  };

  render() {
    return (
      <section className="skills" id="Skills">
        <div className="container">
          <div className="data">
            <div className="skillsList">
              <Skill skills={this.state.skills} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
