import { useEffect, useState } from "react";
import { GITHUB_USERNAME } from "../utils/site";

const PROFILE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

let cache = null;
let inFlight = null;

function fetchProfile() {
  if (cache) return Promise.resolve(cache);
  if (inFlight) return inFlight;

  inFlight = fetch(PROFILE_URL, {
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
      if (!data || typeof data !== "object" || Array.isArray(data)) {
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
 * Loads the public GitHub profile of GITHUB_USERNAME.
 *
 * @returns {{profile: object|null, loading: boolean, error: string|null}}
 */
export function useGitHubProfile() {
  const [state, setState] = useState({
    profile: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchProfile()
      .then((data) => {
        if (!cancelled) setState({ profile: data, loading: false, error: null });
      })
      .catch((err) => {
        if (!cancelled)
          setState({ profile: null, loading: false, error: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
