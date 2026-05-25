import React from "react";

interface HexGridProps {
  tileCount?: number;
  hexSize?: number;
  playerLocations?: Set<number>;
  redLocations?: Set<number>;
}

/**
 * Returns all cube coordinates (q, r, s) within `radius` rings of the origin.
 * A radius-3 grid produces exactly 37 hexes.
 */
function hexesInRadius(radius: number): { q: number; r: number }[] {
  const hexes: { q: number; r: number }[] = [];
  for (let q = -radius; q <= radius; q++) {
    const r1 = Math.max(-radius, -q - radius);
    const r2 = Math.min(radius, -q + radius);
    for (let r = r1; r <= r2; r++) {
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
const COLOR_DEFAULT = "#1e2d4a"; // deep space blue
const COLOR_MECATOL = "#c9a84c"; // Mecatol gold
const COLOR_PLAYER  = "#3d8b5e"; // rich green home systems
const COLOR_RED     = "#7a1f17"; // red anomaly tiles
const STROKE_DEFAULT = "#2e4a70";
const STROKE_MECATOL = "#e6c87a";
const STROKE_PLAYER  = "#5db87e";
const STROKE_RED     = "#c04030";

// Radial highlight — a lighter inner glow rendered as a second, smaller polygon
const HIGHLIGHT_DEFAULT = "rgba(100, 160, 255, 0.12)";
const HIGHLIGHT_MECATOL = "rgba(255, 230, 140, 0.18)";
const HIGHLIGHT_PLAYER  = "rgba(100, 220, 150, 0.15)";
const HIGHLIGHT_RED     = "rgba(255, 100, 80, 0.12)";

const RADIUS = 3; // radius-3 → 37 tiles

const HexGrid: React.FC<HexGridProps> = ({
  hexSize = 40,
  playerLocations,
  redLocations,
}) => {
  const hexes = hexesInRadius(RADIUS);
  const padding = hexSize * 2;

  // Compute SVG viewBox to fit all hexes
  const pixels = hexes.map(({ q, r }) => hexToPixel(q, r, hexSize));
  const xs = pixels.map((p) => p.x);
  const ys = pixels.map((p) => p.y);
  const minX = Math.min(...xs) - hexSize - padding / 2;
  const minY = Math.min(...ys) - hexSize - padding / 2;
  const maxX = Math.max(...xs) + hexSize + padding / 2;
  const maxY = Math.max(...ys) + hexSize + padding / 2;
  const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

  // Unique id prefix so multiple grids on the page don't clash
  const gradId = React.useId().replace(/:/g, "");

  return (
    <svg
      viewBox={viewBox}
      style={{
        width: "100%",
        maxWidth: 700,
        display: "block",
        margin: "0 auto",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {hexes.map(({ q, r }, i) => {
          const { x, y } = hexToPixel(q, r, hexSize);
          const isCenter = q === 0 && r === 0;
          const tileNumber = i + 1;
          const isPlayer = playerLocations?.has(tileNumber) ?? false;
          const isRed    = redLocations?.has(tileNumber) ?? false;

          let highlight = HIGHLIGHT_DEFAULT;
          if (isCenter)       highlight = HIGHLIGHT_MECATOL;
          else if (isPlayer)  highlight = HIGHLIGHT_PLAYER;
          else if (isRed)     highlight = HIGHLIGHT_RED;

          // Radial gradient centred on each hex
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
        const isCenter   = q === 0 && r === 0;
        const tileNumber = i + 1;
        const isPlayer   = playerLocations?.has(tileNumber) ?? false;
        const isRed      = redLocations?.has(tileNumber) ?? false;

        let fill   = COLOR_DEFAULT;
        let stroke = STROKE_DEFAULT;
        if (isCenter)      { fill = COLOR_MECATOL; stroke = STROKE_MECATOL; }
        else if (isPlayer) { fill = COLOR_PLAYER;  stroke = STROKE_PLAYER;  }
        else if (isRed)    { fill = COLOR_RED;      stroke = STROKE_RED;    }

        const gradientId = `rg-${gradId}-${i}`;
        const innerSize  = hexSize - 2;

        return (
          <g key={i}>
            {/* Base hex */}
            <polygon
              points={hexCorners(x, y, innerSize)}
              fill={fill}
              stroke={stroke}
              strokeWidth={1.5}
            />
            {/* Radial inner highlight overlay */}
            <polygon
              points={hexCorners(x, y, innerSize)}
              fill={`url(#${gradientId})`}
              stroke="none"
            />
            {/* Label */}
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={hexSize * 0.28}
              fill={isCenter ? "#1a0e00" : "#c8daf0"}
              fontWeight={isCenter ? "bold" : "normal"}
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {isCenter ? "Mecatol Rex" : tileNumber}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default HexGrid;
