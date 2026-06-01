import Grid from "./common/Grid";
import { BlueTile, MecatolTile, PlayerTile, RedTile } from "./common/Tiles";

const Rectangle = () => {
  return (
    <Grid viewBox="-50 -50 100 100">
      <>
        {/* Column 1 */}
        <PlayerTile q={-3} r={0} s={1} />
        <BlueTile q={-3} r={1} s={1} />
        <BlueTile q={-3} r={2} s={1} />
        <PlayerTile q={-3} r={3} s={1} />

        {/* Column 2 */}
        <BlueTile q={-2} r={-1} s={1} />
        <RedTile q={-2} r={0} s={1} />
        <BlueTile q={-2} r={1} s={1} />
        <RedTile q={-2} r={2} s={1} />
        <BlueTile q={-2} r={3} s={1} />

        {/* Column 3 */}
        <BlueTile q={-1} r={-1} s={1} />
        <RedTile q={-1} r={0} s={1} />
        <RedTile q={-1} r={1} s={1} />
        <BlueTile q={-1} r={2} s={1} />

        {/* Column 4 */}
        <BlueTile q={0} r={-2} s={1} />
        <RedTile q={0} r={-1} s={1} />
        <MecatolTile q={0} r={0} s={1} />
        <RedTile q={0} r={1} s={1} />
        <BlueTile q={0} r={2} s={1} />

        {/* Column 5 */}
        <BlueTile q={1} r={1} s={1} />
        <RedTile q={1} r={0} s={1} />
        <RedTile q={1} r={-1} s={1} />
        <BlueTile q={1} r={-2} s={1} />

        {/* Column 6 */}
        <BlueTile q={2} r={-3} s={1} />
        <RedTile q={2} r={-2} s={1} />
        <BlueTile q={2} r={-1} s={1} />
        <RedTile q={2} r={0} s={1} />
        <BlueTile q={2} r={1} s={1} />

        {/* Column 7 */}
        <PlayerTile q={3} r={-3} s={1} />
        <BlueTile q={3} r={-2} s={1} />
        <BlueTile q={3} r={-1} s={1} />
        <PlayerTile q={3} r={0} s={1} />
      </>
    </Grid>
  );
};

export default Rectangle;
