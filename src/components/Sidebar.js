import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <Container id="profile">
      <Row>
        <Col
          id="profile_img"
          style={{
            background:
              "url(https://avatars.githubusercontent.com/u/57595818?v=4) center;",
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
          undefined
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
            <a href="https://krapas170.github.io">krapas170.github.io</a>
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; Allgäu
          </span>
          <span style={{ display: "none" }}>
            <i className="fas fa-user-tie"></i> &nbsp;&nbsp; Available for hire
          </span>
          <div className="socials">
            <span style={{ display: "none !important" }}>
              <a
                href="https://www.twitter.com/null"
                target="_blank"
                className="socials"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span style={{ display: "none !important" }}>
              <a
                href="https://www.dribbble.com/null"
                target="_blank"
                className="socials"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/pascal-kray-471700219/"
                target="_blank"
                className="socials"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span style={{ display: "none !important" }}>
              <a
                href="https://www.medium.com/@null/"
                target="_blank"
                className="socials"
              >
                <i className="fab fa-medium-m"></i>
              </a>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
