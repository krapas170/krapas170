import { Container } from "react-bootstrap";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import RepoGrid from "../components/RepoGrid";

function Projects() {
  // Repositories arrive sorted by last push, so the first four are the latest.
  const { repos, loading, error } = useGitHubRepos((data) => data.slice(0, 4));

  return (
    <Container id="work">
      <h1>Work</h1>
      <p>Meine vier zuletzt auf GitHub hochgeladenen Projekte</p>
      <div className="projects" id="work_section">
        <RepoGrid
          repos={repos}
          loading={loading}
          error={error}
          emptyMessage="Noch keine öffentlichen Repositories vorhanden."
        />
      </div>
    </Container>
  );
}

export default Projects;
