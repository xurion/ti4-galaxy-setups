import Grid from "../common/Grid";
import {
  BlueTile,
  MecatolTile,
  PlayerTile,
  RedTile,
  TradeTile,
} from "../common/Tiles";

const TradeWars = () => {
  return (
    <Grid viewBox="-58 -36 116 81">
      <>
        {/* Column 1 */}
        <BlueTile q={-3} r={2} s={1} />
        <PlayerTile q={-3} r={3} s={1} />

        {/* Column 2 */}
        <TradeTile q={-2} r={0} s={1} />
        <RedTile q={-2} r={1} s={1} />
        <RedTile q={-2} r={2} s={1} />
        <BlueTile q={-2} r={3} s={1} />

        {/* Column 3 */}
        <RedTile q={-1} r={-1} s={1} />
        <BlueTile q={-1} r={0} s={1} />
        <BlueTile q={-1} r={1} s={1} />
        <RedTile q={-1} r={2} s={1} />

        {/* Column 4 */}
        <BlueTile q={0} r={-1} s={1} />
        <MecatolTile q={0} r={0} s={1} />
        <BlueTile q={0} r={1} s={1} />
        <TradeTile q={0} r={2} s={1} />

        {/* Column 5 */}
        <RedTile q={1} r={-2} s={1} />
        <BlueTile q={1} r={-1} s={1} />
        <BlueTile q={1} r={0} s={1} />
        <RedTile q={1} r={1} s={1} />

        {/* Column 6 */}
        <TradeTile q={2} r={-2} s={1} />
        <RedTile q={2} r={-1} s={1} />
        <RedTile q={2} r={0} s={1} />
        <BlueTile q={2} r={1} s={1} />

        {/* Column 7 */}
        <BlueTile q={3} r={-1} s={1} />
        <PlayerTile q={3} r={0} s={1} />
      </>
    </Grid>
  );
};

export default TradeWars;
