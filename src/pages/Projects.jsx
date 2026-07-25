import { Container } from "react-bootstrap";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import RepoGrid from "../components/RepoGrid";

function Projects() {
  // Repositories arrive sorted by last push, so the first four are the latest.
  const { repos, loading, error } = useGitHubRepos((data) => data.slice(0, 4));

  return (
    <Container id="work">
      <h1>Work</h1>
      <p>My last four works that I uploaded to GitHub</p>
      <div className="projects" id="work_section">
        <RepoGrid
          repos={repos}
          loading={loading}
          error={error}
          emptyMessage="No public repositories to show yet."
        />
      </div>
    </Container>
  );
}

export default Projects;
