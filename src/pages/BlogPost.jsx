import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { findPost, resolveImage } from "../utils/blogPosts";

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
          <div
            id="background_overlay"
            style={{
              background:
                "linear-gradient(0deg, var(--bg-color), rgba(10, 10, 10, 0.4))",
            }}
          ></div>
        </>
      )}

      <div id="blog-display">
        <h1 id="blog_title">{post.title}</h1>
        <h2 id="blog_sub_title">{post.sub_title}</h2>

        {/* Optional long-form body: add a "content" array of paragraphs to the
            post in src/utils/blog.json to fill this in. */}
        {Array.isArray(post.content) &&
          post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </div>
  );
}

export default BlogPost;
