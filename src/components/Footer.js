import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container id="footer_blog">
      &copy;
      <span id="copyright">
        <script>{`document.getElementById('copyright')
              .appendChild(document.createTextNode(new Date().getFullYear()))`}</script>
      </span>{" "}
      Pascal Kray
    </Container>
  );
}

export default Footer;
