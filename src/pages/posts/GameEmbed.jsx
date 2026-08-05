import { useState } from "react";

const GAME_URL = "/blog/java-memory/game/";

/**
 * Embeds the CheerpJ build of the game.
 *
 * The iframe is only mounted after a click: CheerpJ pulls several megabytes of
 * runtime, and someone who just wants to read the post should not pay for that.
 */
export default function GameEmbed() {
  const [gestartet, setGestartet] = useState(false);

  return (
    <div className="game_embed">
      <div className="game_frame">
        {gestartet ? (
          <iframe
            src={GAME_URL}
            title="Memory-Spiel"
            allow="autoplay"
            // The game runs from this same origin, so no sandbox attribute —
            // it would cut the JVM off from its own storage.
          ></iframe>
        ) : (
          <div className="game_start">
            <p>Memory läuft direkt hier im Browser — das Original, unverändert.</p>
            <button type="button" onClick={() => setGestartet(true)}>
              Spiel starten
            </button>
            <p className="game_hint">
              Beim ersten Start werden einige Megabyte Laufzeitumgebung geladen.
            </p>
          </div>
        )}
      </div>
      <p className="game_link">
        <a href={GAME_URL} target="_blank" rel="noopener noreferrer">
          In eigenem Tab öffnen
        </a>
      </p>
    </div>
  );
}
