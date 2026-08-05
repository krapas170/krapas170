import posts from "./blog.json";

// Vite resolves and hashes every image in src/img/blog at build time. Looking
// them up through this map instead of a bare <img src="..."> means a post whose
// top_image has not been added yet renders without an image rather than showing
// a broken-image icon.
const images = import.meta.glob("../img/blog/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
});

const imagesByFilename = Object.fromEntries(
  Object.entries(images).map(([path, url]) => [path.split("/").pop(), url])
);

/**
 * Resolves a `top_image` filename from blog.json to a bundled asset URL.
 *
 * @param {string|undefined} filename e.g. "memory-game-icon.png"
 * @returns {string|null} the hashed URL, or null when the file is not present
 */
export function resolveImage(filename) {
  if (!filename) return null;
  return imagesByFilename[filename] ?? null;
}

/** Posts marked `visible`, in the order they appear in blog.json. */
export const visiblePosts = posts.filter((post) => post.visible);

/**
 * @param {string} slug value of a post's `url_title`
 * @returns {object|undefined}
 */
export function findPost(slug) {
  return visiblePosts.find((post) => post.url_title === slug);
}
