import { useGitHubReleases } from "../hooks/useGitHubReleases";
import ReleaseNotes from "./ReleaseNotes";

// GitHub's own "package" octicon, inlined so the cards need no icon font.
function PackageIcon() {
  return (
    <svg
      aria-hidden="true"
      height="16"
      width="16"
      viewBox="0 0 16 16"
      version="1.1"
      className="octicon"
    >
      <path
        fillRule="evenodd"
        d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
      />
    </svg>
  );
}

function formatSize(bytes) {
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Presentational half: renders already-loaded releases as GitHub-style cards.
 * Kept separate from the fetching so the markup can be rendered and checked
 * without a network round trip.
 *
 * @param {{releases: object[]}} props
 */
export function ReleaseCards({ releases }) {
  if (releases.length === 0) {
    return (
      <p className="repo_status">Noch keine Versionen veröffentlicht.</p>
    );
  }

  const latest = releases[0];

  return (
    <>
      <p className="current_version">
        Die aktuellste Version ist{" "}
        <strong>
          <a
            href={latest.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {latest.tag_name}
          </a>
        </strong>{" "}
        vom {formatDate(latest.published_at)}
      </p>

      {releases.map((release) => (
        <div className="release_card" key={release.id}>
          <div className="release_body">
            <h2>
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {release.name || release.tag_name}
              </a>
            </h2>
            <ReleaseNotes body={release.body} />
          </div>

          <div className="release_footer">
            <h3>
              Dateien
              <span className="counter">{release.assets.length}</span>
            </h3>
            {release.assets.length === 0 ? (
              <p className="release_empty">Keine Dateien zum Herunterladen.</p>
            ) : (
              <ul className="release_assets">
                {release.assets.map((asset) => (
                  <li key={asset.id}>
                    <PackageIcon />
                    <a
                      href={asset.browser_download_url}
                      rel="nofollow noopener noreferrer"
                    >
                      {asset.name}
                    </a>
                    <span className="asset_size">{formatSize(asset.size)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * Loads a repository's releases and renders them as GitHub-style cards.
 *
 * The original static page pulled in GitHub's own stylesheets for this look.
 * Those hashed asset URLs now 404, so the styling is reimplemented in
 * index.css instead.
 *
 * @param {{repo: string}} props "owner/name"
 */
export default function ReleaseList({ repo }) {
  const { releases, loading, error } = useGitHubReleases(repo);

  if (loading) {
    return (
      <p className="repo_status" role="status">
        Versionen werden geladen …
      </p>
    );
  }

  if (error) {
    return (
      <p className="repo_status repo_error" role="alert">
        {error}
      </p>
    );
  }

  return <ReleaseCards releases={releases} />;
}
