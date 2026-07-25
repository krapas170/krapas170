import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container id="not_found">
      <h1>404</h1>
      <p>This page does not exist.</p>
      <p>
        <Link to="/work">Back to my work</Link>
      </p>
    </Container>
  );
}

export default NotFound;
