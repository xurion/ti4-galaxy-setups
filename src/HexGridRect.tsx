import { HexGrid, Layout, Hexagon } from "react-hexgrid";

const PlayerHex = (props: { q: number; r: number; s: number }) => (
  <Hexagon {...props} className="player-hex" />
);

const RedHex = (props: { q: number; r: number; s: number }) => (
  <Hexagon {...props} className="red-hex" />
);

const BlueHex = (props: { q: number; r: number; s: number }) => (
  <Hexagon {...props} className="blue-hex" />
);

const MecatolHex = (props: { q: number; r: number; s: number }) => (
  <Hexagon {...props} className="mecatol-hex" />
);

const HexRect = () => {
  return (
    <div>
      <HexGrid viewBox="-50 -50 100 100">
        <Layout
          flat
          origin={{ x: 0, y: 0 }}
          size={{ x: 10, y: 10 }}
          spacing={1.05}
        >
          {/* Column 1 */}
          <PlayerHex q={-3} r={0} s={1} />
          <BlueHex q={-3} r={1} s={1} />
          <BlueHex q={-3} r={2} s={1} />
          <PlayerHex q={-3} r={3} s={1} />

          {/* Column 2 */}
          <BlueHex q={-2} r={-1} s={1} />
          <RedHex q={-2} r={0} s={1} />
          <BlueHex q={-2} r={1} s={1} />
          <RedHex q={-2} r={2} s={1} />
          <BlueHex q={-2} r={3} s={1} />

          {/* Column 3 */}
          <BlueHex q={-1} r={-1} s={1} />
          <RedHex q={-1} r={0} s={1} />
          <RedHex q={-1} r={1} s={1} />
          <BlueHex q={-1} r={2} s={1} />

          {/* Column 4 */}
          <BlueHex q={0} r={-2} s={1} />
          <RedHex q={0} r={-1} s={1} />
          <MecatolHex q={0} r={0} s={1} />
          <RedHex q={0} r={1} s={1} />
          <BlueHex q={0} r={2} s={1} />

          {/* Column 5 */}
          <BlueHex q={1} r={1} s={1} />
          <RedHex q={1} r={0} s={1} />
          <RedHex q={1} r={-1} s={1} />
          <BlueHex q={1} r={-2} s={1} />

          {/* Column 6 */}
          <BlueHex q={2} r={-3} s={1} />
          <RedHex q={2} r={-2} s={1} />
          <BlueHex q={2} r={-1} s={1} />
          <RedHex q={2} r={0} s={1} />
          <BlueHex q={2} r={1} s={1} />

          {/* Column 7 */}
          <PlayerHex q={3} r={-3} s={1} />
          <BlueHex q={3} r={-2} s={1} />
          <BlueHex q={3} r={-1} s={1} />
          <PlayerHex q={3} r={0} s={1} />
        </Layout>
      </HexGrid>
    </div>
  );
};

export default HexRect;
