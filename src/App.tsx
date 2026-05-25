import { useState } from "react";
import "./App.css";

const SHAPES: Record<number, string[]> = {
  2: ["Trade Wars"],
  3: ["Triangle", "Compact", "Manta", "Rex"],
  4: ["Normal", "Horizontal", "Vertical", "Gaps", "Warp", "Double Warp", "Mini Warp"],
  5: ["Normal", "Diamond", "Flat", "Notch", "Approaching"],
  6: ["Normal", "Spiral", "Large"],
  7: ["Normal", "Warp"],
  8: ["Normal", "Warp"],
};

function App() {
  const [players, setPlayers] = useState<number>(4);
  const [shape, setShape] = useState<string>(SHAPES[4][0]);
  const [prophecyOfKings, setProphecyOfKings] = useState<boolean>(true);

  function handlePlayersChange(n: number) {
    setPlayers(n);
    setShape(SHAPES[n][0]);
  }

  return (
    <div>
      <label htmlFor="players-select">Players</label>
      <select
        id="players-select"
        value={players}
        onChange={(e) => handlePlayersChange(Number(e.target.value))}
      >
        {Array.from({ length: 7 }, (_, i) => i + 2).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <label htmlFor="shape-select">Shape</label>
      <select
        id="shape-select"
        value={shape}
        onChange={(e) => setShape(e.target.value)}
      >
        {SHAPES[players].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <label htmlFor="pok-checkbox">
        <input
          id="pok-checkbox"
          type="checkbox"
          checked={prophecyOfKings}
          onChange={(e) => setProphecyOfKings(e.target.checked)}
        />
        Prophecy of Kings
      </label>
    </div>
  );
}

export default App;
