import ReleaseList from "../../components/ReleaseList";
import preview from "../../img/blog/memory-game-preview.png";

// Text carried over verbatim from the original static page at
// krapas170.github.io/blog/java-memory/.
export default function JavaMemory() {
  return (
    <>
      <p>
        At school we started programming a very popular game. Unfortunately, we
        didn&apos;t completely finish programming it, so I thought to myself:
        why not finish the game?
        <br />
        <strong>Said and done!</strong>
        <br />
        Now the game is finally finished and you can download it directly from
        my website. Simply click on the correct file below and install it.
      </p>
      <p>
        If you have problems installing or starting the game, feel free to
        contact me. Found a bug or have a suggestion for the game? Then simply
        report it{" "}
        <a
          href="https://github.com/krapas170/Java-Memory/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . This helps me to improve the game.
      </p>

      <img src={preview} alt="Preview of the game" />

      <ReleaseList repo="krapas170/Java-Memory" />
    </>
  );
}
