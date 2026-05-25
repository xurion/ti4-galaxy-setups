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
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <h1 className="app-title">TI4 Galaxy Setups</h1>
        <p className="app-subtitle">Twilight Imperium 4th Edition</p>
      </header>

      <div className="app-body">
        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <p className="sidebar-section-title">Configuration</p>

            <div className="field">
              <label htmlFor="players-select">Players</label>
              <select id="players-select" defaultValue="4">
                <option value="4">4 Players</option>
                <option value="5">5 Players</option>
                <option value="6">6 Players</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="shape-select">Board Shape</label>
              <select id="shape-select" defaultValue="normal">
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="small">Small (Warp)</option>
              </select>
            </div>

            <div className="field-checkbox">
              <input type="checkbox" id="pok-checkbox" />
              <label htmlFor="pok-checkbox">Prophecy of Kings</label>
            </div>
          </div>

          <div className="sidebar-section">
            <p className="sidebar-section-title">Legend</p>
            <div className="legend">
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--default" />
                Blue system tile
              </div>
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--mecatol" />
                Mecatol Rex
              </div>
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--player" />
                Home system
              </div>
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--red" />
                Red system tile
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="main-content">
          <section className="galaxy-section">
            <h2 className="galaxy-section-heading">4 Players — Normal</h2>
            <p className="galaxy-section-sub">
              Brave the Void pattern · balanced wormholes
            </p>

            <div className="hex-grid-wrapper">
              <HexGrid
                playerLocations={grids["4player"].normal.playerLocations}
                redLocations={grids["4player"].normal.redLocations}
              />
            </div>

            <div className="instructions">
              <p>
                This setup uses the "Brave the void" pattern from the base game
                and mixes in guaranteed tiles for balance. It aims to allow
                enough wormholes for strategic use whilst avoiding wormhole
                spam.
              </p>
              <ul>
                <li>
                  Select 20 blue tiles at random, but make sure to include some
                  or all of the following:
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
                    <li>1× Alpha Wormhole</li>
                    <li>1× Asteroid Field</li>
                    <li>1× Asteroid Field with Alpha Wormhole</li>
                    <li>1× Beta Wormhole</li>
                    <li>3× Empty Space</li>
                    <li>1× Gravity Rift</li>
                    <li>1× Nebula</li>
                    <li>1× Supernova</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
