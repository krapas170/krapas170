import ReleaseList from "../../components/ReleaseList";
import preview from "../../img/blog/memory-game-preview.png";

// Translated from the original English text on the old static page at
// krapas170.github.io/blog/java-memory/.
export default function JavaMemory() {
  return (
    <>
      <p>
        In der Schule haben wir angefangen, ein sehr bekanntes Spiel zu
        programmieren. Leider haben wir es nie ganz fertig bekommen — also
        dachte ich mir: Warum das Spiel nicht selbst zu Ende bringen?
        <br />
        <strong>Gesagt, getan!</strong>
        <br />
        Jetzt ist das Spiel endlich fertig und du kannst es direkt hier
        herunterladen. Einfach unten die passende Datei anklicken und
        installieren.
      </p>
      <p>
        Falls es beim Installieren oder Starten hakt, melde dich gerne bei mir.
        Einen Fehler gefunden oder einen Vorschlag für das Spiel? Dann melde ihn
        einfach{" "}
        <a
          href="https://github.com/krapas170/Java-Memory/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          hier
        </a>
        . Das hilft mir, das Spiel zu verbessern.
      </p>

      <img src={preview} alt="Vorschau des Spiels" />

      <ReleaseList repo="krapas170/Java-Memory" />
    </>
  );
}
