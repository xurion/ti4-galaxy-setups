import "./App.css";
import BraveTheVoid from "./BraveTheVoid";
import Rectangle from "./Rectangle";

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
            <h2 className="galaxy-section-heading">Brave the Void</h2>
            <p className="galaxy-section-sub">4 players | 37 tiles</p>

            <div className="hex-grid-wrapper">
              <BraveTheVoid />

              <div className="instructions">
                <p>
                  This setup uses the "Brave the void" pattern from the base
                  game and mixes in guaranteed tiles for balance. It aims to
                  allow enough wormholes for strategic use whilst avoiding
                  wormhole spam.
                </p>
                <ul>
                  <li>
                    Select 20 blue tiles at random, but make sure to include
                    some or all of the following:
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
            </div>
          </section>

          <section>
            <h2 className="galaxy-section-heading">Rectangle</h2>
            <p className="galaxy-section-sub">4 players | 31 tiles</p>

            <div className="hex-grid-wrapper">
              <Rectangle />

              <div className="instructions">
                <p>
                  This horizontal setup uses 6 less tiles (4 blue and 2 red)
                  than the normal setup. There are still some guaranteed tiles
                  for balance, but the red tile pattern often leads to more
                  territory disputes.
                </p>
                <ul>
                  <li>
                    Select 16 blue tiles at random, but the recommended ones to
                    include are:
                    <ul>
                      <li>Atlas (Beta Wormhole)</li>
                      <li>Lodor (Alpha Wormhole)</li>
                      <li>Primor (Legendary)</li>
                      <li>Hope's End (Legendary)</li>
                    </ul>
                  </li>
                  <li>
                    The recommended 10 red tiles:
                    <ul>
                      <li>Cormund (Gravity Rift)</li>
                      <li>Everra (Nebula)</li>
                      <li>2x Asteroid Field</li>
                      <li>1x Asteroid Field with Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
                      <li>1x Empty Space</li>
                      <li>1x Gravity Rift</li>
                      <li>1x Nebula</li>
                      <li>1x Supernova</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
