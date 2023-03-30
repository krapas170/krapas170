import React from "react";
import { Container } from "react-bootstrap";

function Projects() {
  return (
    <Container id="work">
      <h1>Work</h1>
      <p>My last four works that I uploaded to GitHub</p>
      <div className="projects" id="work_section">
        {/* Hier können weitere Komponenten hinzugefügt werden, um die Projekte anzuzeigen */}
      </div>
    </Container>
  );
}

export default Projects;
