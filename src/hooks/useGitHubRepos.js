import { useEffect, useState } from "react";
import { GITHUB_USERNAME } from "../utils/site";

const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`;

// The unauthenticated GitHub API allows 60 requests per hour and IP. Projects,
// Forks and About all need the same payload, so it is fetched once, cached in
// module scope and shared between them. Visitors behind a shared NAT would
// otherwise burn through the quota three times as fast.
//
// Deliberately unpaginated: per_page=100 is the API maximum and this account has
// 10 repositories. Following Link rel="next" would multiply requests against the
// very quota this cache exists to protect. Should the account ever pass 100
// repositories, the pages only ever show the four most recently pushed entries,
// so only a fork that has not been pushed to in 100 repositories' time would
// drop off.
let cache = null;
let inFlight = null;

function fetchRepos() {
  if (cache) return Promise.resolve(cache);
  if (inFlight) return inFlight;

  inFlight = fetch(REPOS_URL, {
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
      // A rate-limited or errored response is a JSON *object*, not an array.
      // Without this guard the next `.filter()`/`.slice()` throws.
      if (!Array.isArray(data)) {
        throw new Error("Unerwartetes Antwortformat der GitHub-API.");
      }
      cache = data;
      return data;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

/**
 * Loads the public repositories of GITHUB_USERNAME, sorted by last push.
 *
 * @param {(repos: object[]) => object[]} [select] optional filter/slice applied
 *   to the raw repository list.
 * @returns {{repos: object[], loading: boolean, error: string|null}}
 */
export function useGitHubRepos(select) {
  const [state, setState] = useState({
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchRepos()
      .then((data) => {
        if (cancelled) return;
        setState({
          repos: select ? select(data) : data,
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({ repos: [], loading: false, error: err.message });
      });

    // Prevents a state update after the component unmounted, which happens when
    // a visitor clicks through the navigation faster than the request resolves.
    return () => {
      cancelled = true;
    };
    // `select` is intentionally omitted: callers pass an inline arrow function,
    // which would change identity on every render and re-trigger the effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
