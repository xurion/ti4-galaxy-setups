import { useState } from "react";
import "./App.css";
import BraveTheVoid from "./setups/BraveTheVoid";
import Compact from "./setups/Compact";
import Gaps from "./setups/Gaps";
import Manta from "./setups/Manta";
import Rectangle from "./setups/Rectangle";
import RectanglePlus from "./setups/RectanglePlus";
import TradeWars from "./setups/TradeWars";
import { TriangleLines, TriangleRing } from "./setups/Triangle";

function App() {
  const [showTriangleLines, setShowTriangleLines] = useState(true);

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
          {/* <div className="sidebar-section">
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
          </div> */}

          <div className="sidebar-section">
            <p className="sidebar-section-title">Legend</p>
            <div className="legend">
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--default" />
                Blue system
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
                Red system
              </div>
              <div className="legend-item">
                <span className="legend-swatch legend-swatch--trade" />
                Trade system (Trade Wars only)
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="main-content">
          <section className="galaxy-section">
            <h2 className="galaxy-section-heading">Trade Wars</h2>
            <p className="galaxy-section-sub">2 players | 24 tiles</p>

            <div className="hex-grid-wrapper">
              <TradeWars />

              <div className="instructions">
                <p>
                  Uses the{" "}
                  <a
                    href="https://boardgamegeek.com/thread/2114639/trade-wars-2-player-variant"
                    target="_blank"
                  >
                    Trade Wars 2 player variant by Andy Norton
                  </a>
                  .
                </p>
                <ul>
                  <li>
                    Select 10 blue tiles at random, but make sure to include
                    some or all of the following:
                    <ul>
                      <li>Atlas (Beta Wormhole)</li>
                      <li>Lodor (Alpha Wormhole)</li>
                      <li>Primor (Legendary)</li>
                      <li>Hope's End (Legendary)</li>
                    </ul>
                  </li>
                  <li>
                    Select 8 8 red tiles at random, but make sure to include:
                    <ul>
                      <li>Cormund (Gravity Rift)</li>
                      <li>Everra (Nebula)</li>
                      <li>1x Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
                    </ul>
                    You may wish to remove the empty space tiles, depending on
                    your game preference.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="galaxy-section">
            <h2 className="galaxy-section-heading">Compact</h2>
            <p className="galaxy-section-sub">3 players | 19 tiles</p>

            <div className="hex-grid-wrapper">
              <Compact />

              <div className="instructions">
                <p>
                  A smaller setup that makes it very easy for players to get to
                  Mecatol Rex in the first round. A possible variant of this is
                  to completed avoid using wormhole tiles.
                </p>
                <ul>
                  <li>
                    Select 12 blue tiles at random, but make sure to include
                    some or all of the following:
                    <ul>
                      <li>Atlas (Beta Wormhole)</li>
                      <li>Lodor (Alpha Wormhole)</li>
                      <li>Primor (Legendary)</li>
                      <li>Hope's End (Legendary)</li>
                    </ul>
                  </li>
                  <li>
                    Select 3 red tiles at random, but make sure to include:
                    <ul>
                      <li>1x Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="galaxy-section">
            <h2 className="galaxy-section-heading">Manta</h2>
            <p className="galaxy-section-sub">3 players | 23 tiles</p>

            <div className="hex-grid-wrapper">
              <Manta />

              <div className="instructions">
                <p>
                  Provides 3 dedicated blue tiles for each player and a red
                  barrier to pass through to reach Mecatol Rex.
                </p>
                <ul>
                  <li>
                    Select 12 blue tiles at random, but make sure to include
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
                    Select 7 red tiles at random, but make sure to include:
                    <ul>
                      <li>Cormund (Gravity Rift)</li>
                      <li>Everra (Nebula)</li>
                      <li>1x Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="galaxy-section">
            <h2 className="galaxy-section-heading">Triangle</h2>
            <p className="galaxy-section-sub">3 players | 28 tiles</p>

            <div className="hex-grid-wrapper">
              {showTriangleLines ? <TriangleLines /> : <TriangleRing />}

              <div className="variant-toggle-container">
                <div className="variant-toggle">
                  <button
                    className={`variant-toggle-btn${showTriangleLines ? " variant-toggle-btn--active" : ""}`}
                    onClick={() => setShowTriangleLines(true)}
                  >
                    Lines
                  </button>
                  <button
                    className={`variant-toggle-btn${!showTriangleLines ? " variant-toggle-btn--active" : ""}`}
                    onClick={() => setShowTriangleLines(false)}
                  >
                    Ring
                  </button>
                </div>
              </div>

              <div className="instructions">
                <p>
                  Players start at the three points of the triangle. One variant
                  has two red tiles in the path towards Mecatol Rex, the other
                  has red tiles surrounding Mecatol Rex.
                </p>
                <ul>
                  <li>
                    Select 18 blue tiles at random, but make sure to include
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
                    Select 6 red tiles at random, but make sure to include:
                    <ul>
                      <li>Cormund (Gravity Rift)</li>
                      <li>Everra (Nebula)</li>
                      <li>1x Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

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

          <section>
            <h2 className="galaxy-section-heading">Rectangle Plus</h2>
            <p className="galaxy-section-sub">4 players | 37 tiles</p>

            <div className="hex-grid-wrapper">
              <RectanglePlus />

              <div className="instructions">
                <p>
                  Uses the Rectangle setup with the 37 tiles of the Brave the
                  Void setup.
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
            <h2 className="galaxy-section-heading">Gaps</h2>
            <p className="galaxy-section-sub">4 players | 29 tiles</p>

            <div className="hex-grid-wrapper">
              <Gaps />

              <div className="instructions">
                <p>
                  Similar to the Rectangle setup, flipped 90 degrees and has a
                  further 2 missing tiles on either side of Mecatol Rex.
                </p>
                <ul>
                  <li>
                    Select 14 blue tiles at random, but the recommended ones to
                    include are:
                    <ul>
                      <li>Atlas (Beta Wormhole)</li>
                      <li>Lodor (Alpha Wormhole)</li>
                      <li>Primor (Legendary)</li>
                      <li>Hope's End (Legendary)</li>
                    </ul>
                  </li>
                  <li>
                    Select 6 red tiles at random, but make sure to include:
                    <ul>
                      <li>Cormund (Gravity Rift)</li>
                      <li>Everra (Nebula)</li>
                      <li>1x Alpha Wormhole</li>
                      <li>1x Beta Wormhole</li>
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
