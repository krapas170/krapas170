import React from "react";
import { Container } from "react-bootstrap";

function Blog() {
  return (
    <Container id="blog_section">
      <h1>Blog</h1>
      <p>More information about my current work</p>
      <div id="blogs">
        {/* Hier können weitere Komponenten hinzugefügt werden, um die Blogbeiträge anzuzeigen */}
      </div>
    </Container>
  );
}

export default Blog;
