function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <section>
        <div className="section_title">{repo.name}</div>
        <div className="about_section">
          <span style={{ display: "block" }}>
            {repo.description || "No description provided."}
          </span>
        </div>
        <div className="bottom_section">
          <span style={{ display: "inline-block" }}>
            <i className="fa-solid fa-code" aria-hidden="true"></i>&nbsp;
            {repo.language || "Unknown"}
          </span>
          <span title={`${repo.stargazers_count} stars`}>
            <i className="fa-solid fa-star" aria-hidden="true"></i>&nbsp;
            {repo.stargazers_count}
          </span>
          <span title={`${repo.forks_count} forks`}>
            <i className="fa-solid fa-code-branch" aria-hidden="true"></i>&nbsp;
            {repo.forks_count}
          </span>
        </div>
      </section>
    </a>
  );
}

/**
 * Renders the repository list including its loading and error states, so that a
 * failed GitHub request never leaves the visitor staring at an empty page.
 */
export default function RepoGrid({ repos, loading, error, emptyMessage }) {
  if (loading) {
    return (
      <p className="repo_status" role="status">
        Loading repositories…
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

  if (repos.length === 0) {
    return <p className="repo_status">{emptyMessage}</p>;
  }

  return (
    <div className="repo_grid">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
