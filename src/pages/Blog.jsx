import { Container } from "react-bootstrap";
import posts from "../utils/blog.json";

function Blog() {
  const visiblePosts = posts.filter((post) => post.visible);

  return (
    <Container id="blog">
      <h1>Blog</h1>
      <p>More information about my current work</p>
      <div id="blogs" className="projects">
        {visiblePosts.length === 0 ? (
          <p className="repo_status">No posts published yet.</p>
        ) : (
          <div className="repo_grid">
            {visiblePosts.map((post) => (
              <article key={post.url_title}>
                <section>
                  <div className="section_title">{post.title}</div>
                  <div className="about_section">
                    <span style={{ display: "block" }}>{post.sub_title}</span>
                  </div>
                </section>
              </article>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Blog;
