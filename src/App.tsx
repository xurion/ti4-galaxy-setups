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
      <p>
        This setup uses the "Brave the void" pattern from the base game and
        mixes in guaranteed tiles for balance. It aims to allow enough wormholes
        for strategic use whilst avoiding wormhole spam.
      </p>
      <ul>
        <li>
          Select 20 blue tiles at random, but make sure to include some or all
          of the following:
          <ul>
            <li>Atlas (Beta Wormhole)</li>
            <li>Lodor (Alpha Wormhole)</li>
            <li>Primor (Legendary)</li>
            <li>Hope's End (Legendary)</li>
            <li>Quann (Beta Wormhole)</li>
          </ul>
        </li>
        <li>
          Select the following 12 red tiles:
          <ul>
            <li>Cormund (Gravity Rift)</li>
            <li>Everra (Nebula)</li>
            <li>1x Alpha Wormhole</li>
            <li>1x Asteroid Field</li>
            <li>1x Asteroid Field with Alpha Wormhole</li>
            <li>1x Beta Wormhole</li>
            <li>3x Empty Space</li>
            <li>1x Gravity Rift</li>
            <li>1x Nebula</li>
            <li>1x Supernova</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
