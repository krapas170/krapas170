import { Container } from "react-bootstrap";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import RepoGrid from "../components/RepoGrid";

function Forks() {
  const { repos, loading, error } = useGitHubRepos((data) =>
    data.filter((repo) => repo.fork).slice(0, 4)
  );

  return (
    <Container id="forks">
      <h1>Forks</h1>
      <p>Meine vier zuletzt geforkten Repositories auf GitHub</p>
      <div className="projects" id="forks_section">
        <RepoGrid
          repos={repos}
          loading={loading}
          error={error}
          emptyMessage="Noch keine geforkten Repositories vorhanden."
        />
      </div>
    </Container>
  );
}

export default Forks;
