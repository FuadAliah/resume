import React, { useEffect, useState } from "react";
import Project from "../../Components/Project/Project";
import db from "../../Firebase";

import "./Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("Projects")
      .orderBy("date", "asc")
      .onSnapshot(snapshot => {
        setProjects(snapshot.docs.map(doc => ({ id: doc.id, name: doc.data().name, description: doc.data().description, github_url: doc.data().github_url, preview_url: doc.data().preview_url })));
      });
  }, [projects]);

  return (
    <section className="projects" id="Projects">
      <div className="container">
        <div className="data">
          {projects?.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
