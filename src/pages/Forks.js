import React from "react";
import { Container } from "react-bootstrap";

function Forks() {
  return (
    <Container id="forks">
      <h1>Forks</h1>
      <div className="projects" id="forks_section">
        <a
          href="https://github.com/krapas170/OldJavaTutorial"
          target="_blank"
          style={{ position: "relative" }}
        >
          <section>
            <div className="section_title">OldJavaTutorial</div>
            <div className="about_section">
              <span style={{ display: "none" }}>undefined</span>
            </div>
            <div className="bottom_section">
              <span style={{ display: "none" }}>
                <i className="fas fa-code"></i>&nbsp; null
              </span>
              <span>
                <i className="fas fa-star"></i>&nbsp; 0
              </span>
              <span>
                <i className="fas fa-code-branch"></i>&nbsp; 0
              </span>
            </div>
          </section>
        </a>
        <a
          href="https://github.com/krapas170/Github-Webhook"
          target="_blank"
          style={{ position: "relative" }}
        >
          <section>
            <div className="section_title">Github-Webhook</div>
            <div className="about_section">
              <span style={{ display: "block" }}>
                Simple Api to handle GitHub webhooks and redirect them beautiful
                to Discord
              </span>
            </div>
            <div className="bottom_section">
              <span style={{ display: "none" }}>
                <i className="fas fa-code"></i>&nbsp; null
              </span>
              <span>
                <i className="fas fa-star"></i>&nbsp; 0
              </span>
              <span>
                <i className="fas fa-code-branch"></i>&nbsp; 0
              </span>
            </div>
          </section>
        </a>
      </div>
    </Container>
  );
}

export default Forks;
