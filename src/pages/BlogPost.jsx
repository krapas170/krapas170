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
        <p>This post does not exist.</p>
        <p>
          <Link to="/blog">Back to the blog</Link>
        </p>
      </Container>
    );
  }

  const image = resolveImage(post.top_image);
  const body = renderPostBody(slug);

  return (
    <div id="blog">
      <Link to="/blog" className="go_back" aria-label="Back to the blog">
        &#8592;
      </Link>

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
        <h1 id="blog_title">{post.title}</h1>
        <h2 id="blog_sub_title">{post.sub_title}</h2>

        {body ?? (
          <p className="repo_status">
            This post has not been written yet — more information is coming
            soon.
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
