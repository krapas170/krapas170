import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users/krapas170/repos?sort=pushed";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const projects = data.slice(0, 4);
        setProjects(projects);
      });
  }, []);

  return (
    <Container id="work">
      <h1>Work</h1>
      <p>My last four works that I uploaded to GitHub</p>
      <Row>
        {projects.map((project) => (
          <Col md={6}>
            <a href={project.html_url} target="_blank">
              <section>
                <div className="section_title">{project.name}</div>
                <div className="about_section">
                  <span style={{ display: "block" }}>
                    {project.description}
                  </span>
                </div>
                <div className="bottom_section">
                  <span style={{ display: "inline-block" }}>
                    <i className="fas fa-code"></i>&nbsp;
                    {project.language || "Unknown"}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>&nbsp;{project.forks}
                  </span>
                  <span>
                    <i className="fas fa-code-branch"></i>&nbsp;
                    {project.stargazers_count}
                  </span>
                </div>
              </section>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
