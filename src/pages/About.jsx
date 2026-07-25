import React from "react";
import { Container } from "react-bootstrap";
import { useGitHubProfile } from "../hooks/useGitHubProfile";
import { DISPLAY_NAME, EMPLOYERS, LOCATION } from "../utils/site";

function About() {
  const { profile, loading, error } = useGitHubProfile();

  return (
    <Container id="about_page">
      <h1>About</h1>
      <p>A little bit about me</p>

      {loading && (
        <p className="repo_status" role="status">
          Loading profile…
        </p>
      )}
      {error && (
        <p className="repo_status repo_error" role="alert">
          {error}
        </p>
      )}

      {profile && (
        <div className="about_content">
          {profile.bio && <p className="about_bio">{profile.bio}</p>}
          <ul className="about_facts">
            <li>
              <i className="fa-solid fa-user" aria-hidden="true"></i> &nbsp;
              {DISPLAY_NAME}
            </li>
            <li>
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>{" "}
              &nbsp;
              {profile.location || LOCATION}
            </li>
            <li>
              <i className="fa-solid fa-users" aria-hidden="true"></i> &nbsp;
              {EMPLOYERS.map((employer, index) => (
                <React.Fragment key={employer.href}>
                  {index > 0 && " & "}
                  <a
                    href={employer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {employer.name}
                  </a>
                </React.Fragment>
              ))}
            </li>
            <li>
              <i className="fa-solid fa-book" aria-hidden="true"></i> &nbsp;
              {profile.public_repos} public repositories
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
}

export default About;
