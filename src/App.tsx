import "./App.css";
import HexGrid from "./HexGrid";

const grids = {
  "4player": {
    normal: {
      playerLocations: new Set([3, 10, 28, 35]),
      redLocations: new Set([6, 7, 8, 11, 14, 17, 21, 24, 27, 30, 31, 32]),
    },
  },
};

function App() {
  return (
    <div>
      <h1>Twilight Imperium 4th Edition Galaxy Guide</h1>

      <h2>4 Players</h2>

      <h3>Normal</h3>
      <HexGrid
        playerLocations={grids["4player"].normal.playerLocations}
        redLocations={grids["4player"].normal.redLocations}
      />
    </div>
  );
}

export default App;
