# Blog post images

Drop the images referenced by `top_image` in [`src/utils/blog.json`](../../utils/blog.json)
into this folder. The filename has to match exactly.

Currently referenced, and still missing:

| Post | `top_image` |
| --- | --- |
| Java Memory | `memory-game-icon.png` |
| Beater Bot | `coming_soon_negate.png` |
| Gameserver Live Bot | `coming_soon_negate.png` |

Supported extensions: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.svg`.

Vite picks these up automatically through `import.meta.glob` in
[`src/utils/blogPosts.js`](../../utils/blogPosts.js) and emits them as
content-hashed assets. A post whose image is missing simply renders without
one — no broken-image icon, no build error — so images can be added one at a
time.

Each image is used twice: as the card thumbnail on `/blog`, and as the hero
behind the title on the post's own page.
