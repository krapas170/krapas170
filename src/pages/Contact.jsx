import { Container } from "react-bootstrap";
import { EMAIL, LOCATION, SOCIALS, WEBSITE } from "../utils/site";

function Contact() {
  return (
    <Container id="contact_page">
      <h1>Contact</h1>
      <p>How to reach me</p>

      <ul className="contact_list">
        <li>
          <i className="fa-solid fa-envelope" aria-hidden="true"></i> &nbsp;
          <a
            href={`mailto:${EMAIL}?subject=I%20contact%20you%20over%20your%20website`}
          >
            {EMAIL}
          </a>
        </li>
        <li>
          <i className="fa-solid fa-link" aria-hidden="true"></i> &nbsp;
          <a href={WEBSITE}>{WEBSITE.replace("https://", "")}</a>
        </li>
        <li>
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i> &nbsp;
          {LOCATION}
        </li>
      </ul>

      <div className="socials contact_socials">
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
    </Container>
  );
}

export default Contact;
