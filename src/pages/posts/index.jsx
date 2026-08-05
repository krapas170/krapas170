import JavaMemory from "./JavaMemory";

// Each post that has a written article gets a case here, keyed by its
// blog.json `url_title`. The original site gave every post its own index.html;
// this is the same idea, so a post can carry links, images and live data rather
// than being squeezed into a JSON string.
//
// An element is returned rather than a component so that nothing looks like a
// component being defined during render.

/**
 * @param {string} slug a post's `url_title`
 * @returns {React.ReactElement|null} the article body, or null if unwritten
 */
export function renderPostBody(slug) {
  switch (slug) {
    case "java-memory":
      return <JavaMemory />;
    default:
      return null;
  }
}
