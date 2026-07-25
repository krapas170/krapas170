import { Container } from "react-bootstrap";
import { DISPLAY_NAME } from "../utils/site";

function Footer() {
  return (
    <Container id="footer_blog">
      &copy; <span id="copyright">{new Date().getFullYear()}</span>{" "}
      {DISPLAY_NAME}
    </Container>
  );
}

export default Footer;
