import { Hexagon } from "react-hexgrid";

type TileProps = { q: number; r: number; s: number };

export const PlayerTile = (props: TileProps) => (
  <Hexagon {...props} className="player-hex" />
);

export const RedTile = (props: TileProps) => (
  <Hexagon {...props} className="red-hex" />
);

export const BlueTile = (props: TileProps) => (
  <Hexagon {...props} className="blue-hex" />
);

export const MecatolTile = (props: TileProps) => (
  <Hexagon {...props} className="mecatol-hex" />
);
