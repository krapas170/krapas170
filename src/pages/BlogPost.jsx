import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { findPost, resolveImage } from "../utils/blogPosts";
import { renderPostBody } from "./posts";

function BlogPost() {
  const { slug } = useParams();
  const post = findPost(slug);

  if (!post) {
    return (
      <Container id="not_found">
        <h1>404</h1>
        <p>Diesen Beitrag gibt es nicht.</p>
        <p>
          <Link to="/blog">Zurück zum Blog</Link>
        </p>
      </Container>
    );
  }

  const image = resolveImage(post.top_image);
  const body = renderPostBody(slug);

  return (
    <div id="blog" className={image ? "has_hero" : undefined}>
      {/* Hero behind the title, styled by #background / #background_overlay in
          index.css. Skipped entirely when the image file is not present. */}
      {image && (
        <>
          <div
            id="background"
            style={{ background: `url(${image}) center center` }}
          ></div>
          <div id="background_overlay"></div>
        </>
      )}

      <div id="blog-display">
        {/* In normal flow directly above the title, so it cannot drift out of
            the content column the way an absolutely positioned link did. */}
        <Link to="/blog" className="go_back" aria-label="Zurück zum Blog">
          &#8592;
        </Link>
        <h1 id="blog_title">{post.title}</h1>
        <h2 id="blog_sub_title">{post.sub_title}</h2>

        {body ?? (
          <p className="repo_status">
            Dieser Beitrag ist noch nicht geschrieben — mehr Informationen
            folgen in Kürze.
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
