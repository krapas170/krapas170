import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#home" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#about" ? "active" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#work" ? "active" : ""
                }`}
              >
                Work
              </Link>
              <Link
                to="forks"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#forks" ? "active" : ""
                }`}
              >
                Forks
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#blog" ? "active" : ""
                }`}
              >
                Blog
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link ${
                  location.hash === "#contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
