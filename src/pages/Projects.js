import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MagicGrid from "magic-grid";

function Projects() {
  return (
    <Container id="work">
      <h1>Work</h1>
      <p>My last four works that I uploaded to GitHub</p>
      <GitHubProjects />
    </Container>
  );
}

function GitHubProjects() {
  useEffect(() => {
    const magicProjectsGrid = new MagicGrid({
      container: "#work_section",
      animate: true,
      gutter: 30, // default gutter size
      static: true,
      useMin: false,
      maxColumns: 2,
      useTransform: true,
    });

    magicProjectsGrid.listen();

    const url = "https://api.github.com/users/krapas170/repos?sort=pushed";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const projects = data.slice(0, 4);

        const workSection = document.getElementById("work_section");
        let out = "";

        projects.forEach((project) => {
          out += `
            <a href="${project.html_url}" target="_blank">
              <section>
                <div class="section_title">${project.name}</div>
                <div class="about_section">
                  <span style="display:block;">${project.description}</span>
                </div>
                <div class="bottom_section">
                  <span style="display:inline-block;"><i class="fas fa-code"></i>&nbsp; ${
                    project.language || "Unknown"
                  }</span>
                  <span><i class="fas fa-star"></i>&nbsp; ${
                    project.forks
                  }</span>
                  <span><i class="fas fa-code-branch"></i>&nbsp; ${
                    project.stargazers_count
                  }</span>
                </div>
              </section>
            </a>
          `;
        });

        workSection.innerHTML = out;
        magicProjectsGrid.positionItems();
      });
  }, []);

  return <div className="projects" id="work_section"></div>;
}

export default Projects;
