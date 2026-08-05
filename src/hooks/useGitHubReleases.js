import { useEffect, useState } from "react";

// Same module-level cache as useGitHubRepos: the unauthenticated GitHub API
// allows 60 requests per hour and IP, so a revisit to the same post must not
// spend another one.
const cache = new Map();
const inFlight = new Map();

function fetchReleases(repo) {
  if (cache.has(repo)) return Promise.resolve(cache.get(repo));
  if (inFlight.has(repo)) return inFlight.get(repo);

  const request = fetch(`https://api.github.com/repos/${repo}/releases`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((response) => {
      if (response.status === 403 || response.status === 429) {
        throw new Error(
          "Das Anfragelimit der GitHub-API ist momentan erschöpft. Bitte später erneut versuchen."
        );
      }
      if (!response.ok) {
        throw new Error(`Die GitHub-API hat mit Status ${response.status} geantwortet.`);
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error("Unerwartetes Antwortformat der GitHub-API.");
      }
      cache.set(repo, data);
      return data;
    })
    .finally(() => {
      inFlight.delete(repo);
    });

  inFlight.set(repo, request);
  return request;
}

/**
 * Loads the releases of a GitHub repository, newest first.
 *
 * @param {string} repo "owner/name"
 * @returns {{releases: object[], loading: boolean, error: string|null}}
 */
export function useGitHubReleases(repo) {
  const [state, setState] = useState({
    releases: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchReleases(repo)
      .then((data) => {
        if (!cancelled)
          setState({ releases: data, loading: false, error: null });
      })
      .catch((err) => {
        if (!cancelled)
          setState({ releases: [], loading: false, error: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [repo]);

  return state;
}
