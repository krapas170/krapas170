import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sidebar.css";

const Profile = () => {
  const [bio, setBio] = useState("");

  useEffect(() => {
    const url = "https://api.github.com/users/krapas170";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBio(data.bio);
      });
  }, []);

  return (
    <Container id="profile">
      <Row>
        <Col
          id="profile_img"
          style={{
            background: "url(%PUBLIC_URL%/profile-img.jpg) center,",
          }}
        ></Col>
      </Row>
      <Row>
        <Col id="username">
          <span>Pascal Kray</span>
          <a href="https://github.com/krapas170">@krapas170</a>
        </Col>
      </Row>
      <Row>
        <Col id="userbio" style={{ display: "none" }}>
          {bio}
        </Col>
      </Row>
      <Row>
        <Col id="about">
          <span>
            <i className="fas fa-users"></i> &nbsp;{" "}
            <a href="https://creamate.de/">Creamate</a> &{" "}
            <a href="https://www.idkom.de/">ID.KOM Allgäu</a>
          </span>
          <span>
            <i className="fas fa-envelope"></i> &nbsp;{" "}
            <a href="mailto:krapas170@gmail.com?subject=I%20contact%20you%20over%20your%20website">
              krapas170@gmail.com
            </a>
          </span>
          <span>
            <i className="fas fa-link"></i> &nbsp;{" "}
            <a href="https://krapas170.de">krapas170.de</a>
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; Allgäu in Germany
          </span>
          <span style={{ display: "none" }}>
            <i className="fas fa-user-tie"></i> &nbsp;&nbsp; Available for hire
          </span>
          <div className="socials">
            {/*
                      <span style={{ display: "none !important" }}>
                        <a
                          href="https://www.twitter.com/null"
                          target="_blank"
                          className="socials"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span style={{ display: "none !important" }}>
                        <a
                          href="https://www.dribbble.com/null"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="socials"
                        >
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </span>
            */}
            <span>
              <a
                href="https://linkedin.com/in/pascal-kray-471700219/"
                target="_blank"
                rel="noopener noreferrer"
                className="socials"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            {/*
                      <span style={{ display: "none !important" }}>
                        <a
                          href="https://www.medium.com/@null/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="socials"
                        >
                          <i className="fab fa-medium-m"></i>
                        </a>
                      </span>
            */}
            <span>
              <a
                href="https://github.com/krapas170/"
                target="_blank"
                rel="noopener noreferrer"
                className="socials"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span>
              <a
                href="https://m.facebook.com/pascal.kray/"
                target="_blank"
                rel="noopener noreferrer"
                className="socials"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
