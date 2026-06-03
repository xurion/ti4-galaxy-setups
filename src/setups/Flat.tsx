import Grid from "../common/Grid";
import { BlueTile, MecatolTile, PlayerTile, RedTile } from "../common/Tiles";

const Flat = () => {
  return (
    <Grid viewBox="-75 -45 150 109">
      <>
        {/* Column 1 */}
        <BlueTile q={-4} r={1} s={1} />
        <BlueTile q={-4} r={2} s={1} />
        <BlueTile q={-4} r={3} s={1} />

        {/* Column 2 */}
        <PlayerTile q={-3} r={0} s={1} />
        <BlueTile q={-3} r={1} s={1} />
        <BlueTile q={-3} r={2} s={1} />
        <PlayerTile q={-3} r={3} s={1} />

        {/* Column 3 */}
        <RedTile q={-2} r={0} s={1} />
        <RedTile q={-2} r={1} s={1} />
        <BlueTile q={-2} r={2} s={1} />
        <BlueTile q={-2} r={3} s={1} />

        {/* Column 4 */}
        <RedTile q={-1} r={-1} s={1} />
        <BlueTile q={-1} r={0} s={1} />
        <RedTile q={-1} r={1} s={1} />
        <BlueTile q={-1} r={2} s={1} />
        <BlueTile q={-1} r={3} s={1} />

        {/* Column 5 */}
        <RedTile q={0} r={-2} s={1} />
        <BlueTile q={0} r={-1} s={1} />
        <MecatolTile q={0} r={0} s={1} />
        <RedTile q={0} r={1} s={1} />
        <BlueTile q={0} r={2} s={1} />
        <PlayerTile q={0} r={3} s={1} />

        {/* Column 6 */}
        <RedTile q={1} r={-2} s={1} />
        <BlueTile q={1} r={-1} s={1} />
        <RedTile q={1} r={0} s={1} />
        <BlueTile q={1} r={1} s={1} />
        <BlueTile q={1} r={2} s={1} />

        {/* Column 7 */}
        <RedTile q={2} r={-2} s={1} />
        <RedTile q={2} r={-1} s={1} />
        <BlueTile q={2} r={0} s={1} />
        <BlueTile q={2} r={1} s={1} />

        {/* Column 8 */}
        <PlayerTile q={3} r={-3} s={1} />
        <BlueTile q={3} r={-2} s={1} />
        <BlueTile q={3} r={-1} s={1} />
        <PlayerTile q={3} r={0} s={1} />

        {/* Column 9 */}
        <BlueTile q={4} r={-3} s={1} />
        <BlueTile q={4} r={-2} s={1} />
        <BlueTile q={4} r={-1} s={1} />
      </>
    </Grid>
  );
};

export default Flat;
