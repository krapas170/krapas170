import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/forks">Forks</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* Separate site on its own subdomain, so a plain anchor rather than a
            NavLink — the router has no route to match here. */}
        <a
          href="https://journey.krapas170.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          3D World
        </a>
      </nav>
    </header>
  );
}

export default Header;
