import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

function Forks() {
  const [forks, setForks] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/krapas170/repos")
      .then((response) => response.json())
      .then((data) => {
        const filteredForks = data.filter((repo) => repo.fork === true);
        const sortedForks = filteredForks.slice(0, 4);
        setForks(sortedForks);
      });
  }, []);

  return (
    <Container id="forks">
      <h1>Forks</h1>
      <p>My last four forked repositories on GitHub</p>
      <div
        className="projects"
        id="forks_section"
        style={{ position: "relative" }}
      >
        <Row>
          {forks.map((fork) => (
            <Col key={fork.id} sm={6}>
              <a href={fork.html_url} target="_blank" rel="noopener noreferrer">
                <section>
                  <div className="section_title">{fork.name}</div>
                  <div className="about_section">
                    <span style={{ display: "block" }}>{fork.description}</span>
                  </div>
                  <div className="bottom_section">
                    <span style={{ display: "inline-block" }}>
                      <i className="fas fa-code"></i>&nbsp;
                      {fork.language || "Unknown"}
                    </span>
                    <span>
                      <i className="fas fa-star"></i>&nbsp;{fork.forks}
                    </span>
                    <span>
                      <i className="fas fa-code-branch"></i>&nbsp;
                      {fork.stargazers_count}
                    </span>
                  </div>
                </section>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Forks;
