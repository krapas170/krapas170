import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { resolveImage, visiblePosts } from "../utils/blogPosts";

function Blog() {
  return (
    <Container id="blog_section">
      <h1>Blog</h1>
      <p>Mehr Informationen zu meinen aktuellen Projekten</p>
      {/* #blogs is a CSS multi-column container (columns: 2), not a grid —
          see index.css. Cards must be plain flow content for it to work. */}
      <div id="blogs">
        {visiblePosts.length === 0 ? (
          <p className="repo_status">Noch keine Beiträge veröffentlicht.</p>
        ) : (
          visiblePosts.map((post) => {
            const image = resolveImage(post.top_image);

            return (
              <Link key={post.url_title} to={`/blog/${post.url_title}`}>
                <section>
                  {image && <img src={image} alt="" />}
                  <div className="blog_container">
                    <div className="section_title">{post.title}</div>
                    <div className="about_section">
                      <span style={{ display: "block" }}>{post.sub_title}</span>
                    </div>
                  </div>
                </section>
              </Link>
            );
          })
        )}
      </div>
    </Container>
  );
}

export default Blog;
