import React from "react";
import { TiSocialGithub } from "react-icons/ti";

import "./Project.scss";

const Project = ({ project }) => {
  console.log(project);

  return (
    <div className="project-card">
      <div className="head-card">
        <h2 className="project-name">{project.name}</h2>
        <h6 className="project-description">{project.description}</h6>
      </div>
      <div className="footer-card">
        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="github">
          <TiSocialGithub />
        </a>
        <a href={project.preview_url} target="_blank" rel="noopener noreferrer" className="preview">
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default Project;
