import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container id="not_found">
      <h1>404</h1>
      <p>Diese Seite existiert nicht.</p>
      <p>
        <Link to="/work">Zurück zu meinen Projekten</Link>
      </p>
    </Container>
  );
}

export default NotFound;
