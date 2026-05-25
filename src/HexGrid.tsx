import React from "react";

interface HexGridProps {
  tileCount?: number;
  hexSize?: number;
  playerLocations?: Set<number>;
  redLocations?: Set<number>;
}

/**
 * Returns all cube coordinates (q, r, s) within `radius` rings of the origin.
 * A radius-3 grid produces exactly 1 + 3*3*4/2 + ... = 37 hexes.
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
      {hexes.map(({ q, r }, i) => {
        const { x, y } = hexToPixel(q, r, hexSize);
        const isCenter = q === 0 && r === 0;
        const tileNumber = i + 1;
        let color = "#3a6186"; // default tile color
        if (isCenter) {
          color = "#c0a060";
        } else if (playerLocations?.has(tileNumber)) {
          color = "#4a9e5c";
        } else if (redLocations?.has(tileNumber)) {
          color = "#db2118";
        }

        return (
          <g key={i}>
            <polygon
              points={hexCorners(x, y, hexSize - 2)}
              fill={color}
              stroke="#1a2a3a"
              strokeWidth={1.5}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={hexSize * 0.28}
              fill="#fff"
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {isCenter ? "Mecatol Rex" : i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default HexGrid;
