import Grid from "../common/Grid";
import { BlueTile, MecatolTile, PlayerTile, RedTile } from "../common/Tiles";

const Compact = () => {
  return (
    <Grid viewBox="-43 -45 86 90">
      <>
        {/* Column 1 */}
        <BlueTile q={-2} r={0} s={1} />
        <BlueTile q={-2} r={1} s={1} />
        <BlueTile q={-2} r={2} s={1} />

        {/* Column 2 */}
        <PlayerTile q={-1} r={-1} s={1} />
        <BlueTile q={-1} r={0} s={1} />
        <RedTile q={-1} r={1} s={1} />
        <PlayerTile q={-1} r={2} s={1} />

        {/* Column 3 */}
        <BlueTile q={0} r={-2} s={1} />
        <RedTile q={0} r={-1} s={1} />
        <MecatolTile q={0} r={0} s={1} />
        <BlueTile q={0} r={1} s={1} />
        <BlueTile q={0} r={2} s={1} />

        {/* Column 4 */}
        <BlueTile q={1} r={-2} s={1} />
        <BlueTile q={1} r={-1} s={1} />
        <RedTile q={1} r={0} s={1} />
        <BlueTile q={1} r={1} s={1} />

        {/* Column 5 */}
        <BlueTile q={2} r={-2} s={1} />
        <PlayerTile q={2} r={-1} s={1} />
        <BlueTile q={2} r={0} s={1} />
      </>
    </Grid>
  );
};

export default Compact;
