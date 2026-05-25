import React from "react";

interface HexGridRectProps {
  hexSize?: number;
  playerLocations?: Set<number>;
  redLocations?: Set<number>;
}

/**
 * Returns axial coordinates for a 31-tile grid with shape 4-5-4-5-4-5-4
 * left to right (flat-top orientation).
 * 7 columns (q = -3..3); even-q columns have 5 tiles, odd-q have 4:
 *   q=-3 (odd):  r = -2..1  (4 tiles)
 *   q=-2 (even): r = -2..2  (5 tiles)
 *   q=-1 (odd):  r = -2..1  (4 tiles)
 *   q= 0 (even): r = -2..2  (5 tiles)
 *   q= 1 (odd):  r = -2..1  (4 tiles)
 *   q= 2 (even): r = -2..2  (5 tiles)
 *   q= 3 (odd):  r = -2..1  (4 tiles)
 * Total = 4+5+4+5+4+5+4 = 31
 */
function rectHexes(): { q: number; r: number }[] {
  const hexes: { q: number; r: number }[] = [];
  for (let q = -3; q <= 3; q++) {
    // Shift each column's r range to cancel the natural axial vertical offset,
    // so all column tops align at the same pixel y.
    const offset = -Math.floor(q / 2);
    const isWide = q % 2 === 0; // even columns: 5 tiles; odd columns: 4 tiles
    const rMin = offset - 2;
    const rMax = rMin + (isWide ? 4 : 3);
    for (let r = rMin; r <= rMax; r++) {
      hexes.push({ q, r });
    }
  }
  return hexes;
}

/**
 * Convert axial (q, r) to pixel (x, y) using flat-top orientation.
 */
function hexToPixel(
  q: number,
  r: number,
  size: number,
): { x: number; y: number } {
  const x = size * (1.5 * q);
  const y = size * ((Math.sqrt(3) / 2) * q + Math.sqrt(3) * r);
  return { x, y };
}

/**
 * Returns the 6 corner points of a flat-top hexagon as an SVG points string.
 */
function hexCorners(cx: number, cy: number, size: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angleDeg = 60 * i;
    const angleRad = (Math.PI / 180) * angleDeg;
    const x = cx + size * Math.cos(angleRad);
    const y = cy + size * Math.sin(angleRad);
    return `${x},${y}`;
  }).join(" ");
}

// ── Tile colours ──────────────────────────────────────────────────────────────
const COLOR_DEFAULT   = "#1e2d4a";
const COLOR_HIGHLIGHT = "#3d8b5e";
const COLOR_MECATOL   = "#c9a84c";
const STROKE_DEFAULT   = "#2e4a70";
const STROKE_HIGHLIGHT = "#5db87e";
const STROKE_MECATOL   = "#e6c87a";
const COLOR_RED    = "#7a1f17";
const STROKE_RED   = "#c04030";
const HIGHLIGHT_DEFAULT  = "rgba(100, 160, 255, 0.12)";
const HIGHLIGHT_PLAYER   = "rgba(100, 220, 150, 0.15)";
const HIGHLIGHT_MECATOL  = "rgba(255, 230, 140, 0.18)";
const HIGHLIGHT_RED      = "rgba(255, 100, 80, 0.12)";

const MECATOL_TILE = 16;

const HexGridRect: React.FC<HexGridRectProps> = ({
  hexSize = 40,
  playerLocations,
  redLocations,
}) => {
  const hexes = rectHexes();
  const padding = hexSize * 2;

  const pixels = hexes.map(({ q, r }) => hexToPixel(q, r, hexSize));
  const xs = pixels.map((p) => p.x);
  const ys = pixels.map((p) => p.y);
  const minX = Math.min(...xs) - hexSize - padding / 2;
  const minY = Math.min(...ys) - hexSize - padding / 2;
  const maxX = Math.max(...xs) + hexSize + padding / 2;
  const maxY = Math.max(...ys) + hexSize + padding / 2;
  const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

  const gradId = React.useId().replace(/:/g, "");

  return (
    <svg
      viewBox={viewBox}
      style={{
        width: "100%",
        maxWidth: 800,
        display: "block",
        margin: "0 auto",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {hexes.map(({ q, r }, i) => {
          const { x, y } = hexToPixel(q, r, hexSize);
          const tileNumber = i + 1;
          const isMecatol     = tileNumber === MECATOL_TILE;
          const isHighlighted = !isMecatol && (playerLocations?.has(tileNumber) ?? false);
          const isRed         = !isMecatol && !isHighlighted && (redLocations?.has(tileNumber) ?? false);
          const highlight = isMecatol ? HIGHLIGHT_MECATOL : isHighlighted ? HIGHLIGHT_PLAYER : isRed ? HIGHLIGHT_RED : HIGHLIGHT_DEFAULT;
          const id = `rg-${gradId}-${i}`;
          return (
            <radialGradient
              key={id}
              id={id}
              cx={x}
              cy={y}
              r={hexSize * 0.85}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor={highlight} />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          );
        })}
      </defs>

      {hexes.map(({ q, r }, i) => {
        const { x, y } = hexToPixel(q, r, hexSize);
        const tileNumber    = i + 1;
        const isMecatol     = tileNumber === MECATOL_TILE;
        const isHighlighted = !isMecatol && (playerLocations?.has(tileNumber) ?? false);
        const isRed         = !isMecatol && !isHighlighted && (redLocations?.has(tileNumber) ?? false);

        const fill   = isMecatol ? COLOR_MECATOL  : isHighlighted ? COLOR_HIGHLIGHT : isRed ? COLOR_RED  : COLOR_DEFAULT;
        const stroke = isMecatol ? STROKE_MECATOL : isHighlighted ? STROKE_HIGHLIGHT : isRed ? STROKE_RED : STROKE_DEFAULT;
        const gradientId = `rg-${gradId}-${i}`;
        const innerSize  = hexSize - 2;

        return (
          <g key={i}>
            <polygon
              points={hexCorners(x, y, innerSize)}
              fill={fill}
              stroke={stroke}
              strokeWidth={1.5}
            />
            <polygon
              points={hexCorners(x, y, innerSize)}
              fill={`url(#${gradientId})`}
              stroke="none"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={hexSize * 0.28}
              fill={isMecatol ? "#1a0e00" : "#c8daf0"}
              fontWeight={isMecatol ? "bold" : "normal"}
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {isMecatol ? "Mecatol Rex" : tileNumber}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default HexGridRect;
