import { Fragment } from "react";

// GitHub release bodies only ever use a small slice of Markdown: a "What's
// Changed" heading, a bullet list of changes, bold text, links, inline code and
// bare URLs. Parsing just that into React elements keeps the output free of
// dangerouslySetInnerHTML, so no third-party markup can reach the DOM and the
// Content-Security-Policy stays untouched.
const INLINE =
  /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s)]+|@[A-Za-z0-9][A-Za-z0-9-]*)/g;

function shortenUrl(url) {
  // Compare links are unreadable in full; GitHub shows just the tag range.
  const compare = url.match(/\/compare\/(.+)$/);
  if (compare) return compare[1];
  const pull = url.match(/\/pull\/(\d+)$/);
  if (pull) return `#${pull[1]}`;
  return url.replace(/^https?:\/\//, "");
}

function renderInline(text, keyPrefix) {
  const parts = text.split(INLINE).filter((part) => part !== undefined);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (/^`[^`]+`$/.test(part)) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      return (
        <a key={key} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a key={key} href={part} target="_blank" rel="noopener noreferrer">
          <code>{shortenUrl(part)}</code>
        </a>
      );
    }

    if (/^@[A-Za-z0-9]/.test(part)) {
      return (
        <a
          key={key}
          href={`https://github.com/${part.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

/**
 * Renders the Markdown subset that appears in GitHub release notes.
 *
 * @param {{body: string}} props
 */
export default function ReleaseNotes({ body }) {
  if (!body || !body.trim()) {
    return <p className="release_empty">Keine Versionshinweise.</p>;
  }

  const blocks = [];
  let list = null;

  const flushList = () => {
    if (list) {
      blocks.push(
        <ul key={`list-${blocks.length}`}>
          {list.map((item, index) => (
            <li key={index}>{renderInline(item, `li-${blocks.length}-${index}`)}</li>
          ))}
        </ul>
      );
      list = null;
    }
  };

  for (const rawLine of body.replace(/\r\n/g, "\n").split("\n")) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      flushList();
      continue;
    }

    const bullet = line.match(/^\s*[*-]\s+(.*)$/);
    if (bullet) {
      (list ??= []).push(bullet[1]);
      continue;
    }

    flushList();

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const Tag = `h${Math.min(heading[1].length + 1, 6)}`;
      blocks.push(
        <Tag key={`h-${blocks.length}`}>
          {renderInline(heading[2], `h-${blocks.length}`)}
        </Tag>
      );
      continue;
    }

    blocks.push(
      <p key={`p-${blocks.length}`}>{renderInline(line, `p-${blocks.length}`)}</p>
    );
  }

  flushList();

  return <div className="markdown-body">{blocks}</div>;
}
