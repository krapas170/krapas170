import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  DISPLAY_NAME,
  EMAIL,
  EMPLOYERS,
  GITHUB_USERNAME,
  LOCATION,
  MAIL_SUBJECT,
  SOCIALS,
  WEBSITE,
} from "../utils/site";
import "./Sidebar.css";

const Profile = () => {
  return (
    <Container id="profile">
      <Row>
        {/* Styling lives in Sidebar.css via the --profile-image custom
            property; an inline background here would override it. */}
        <Col id="profile_img" role="img" aria-label={DISPLAY_NAME}></Col>
      </Row>
      <Row>
        <Col id="username">
          <span>{DISPLAY_NAME}</span>
          <a href={`https://github.com/${GITHUB_USERNAME}`}>
            @{GITHUB_USERNAME}
          </a>
        </Col>
      </Row>
      <Row>
        <Col id="about">
          <span>
            <i className="fa-solid fa-users" aria-hidden="true"></i> &nbsp;{" "}
            {EMPLOYERS.map((employer, index) => (
              <React.Fragment key={employer.href}>
                {index > 0 && " & "}
                <a href={employer.href} target="_blank" rel="noopener noreferrer">
                  {employer.name}
                </a>
              </React.Fragment>
            ))}
          </span>
          <span>
            <i className="fa-solid fa-envelope" aria-hidden="true"></i> &nbsp;{" "}
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`}
            >
              {EMAIL}
            </a>
          </span>
          <span>
            <i className="fa-solid fa-link" aria-hidden="true"></i> &nbsp;{" "}
            <a href={WEBSITE}>{WEBSITE.replace("https://", "")}</a>
          </span>
          <span>
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp; {LOCATION}
          </span>
          <div className="socials">
            {SOCIALS.map((social) => (
              <span key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socials"
                  aria-label={social.name}
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </a>
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
