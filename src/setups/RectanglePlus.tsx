import Grid from "../common/Grid";
import { BlueTile, MecatolTile, PlayerTile, RedTile } from "../common/Tiles";

const RectanglePlus = () => {
  return (
    <Grid viewBox="-74 -45 148 90">
      <>
        {/* Column 1 */}
        <BlueTile q={-4} r={1} s={1} />
        <RedTile q={-4} r={2} s={1} />
        <BlueTile q={-4} r={3} s={1} />

        {/* Column 2 */}
        <PlayerTile q={-3} r={0} s={1} />
        <BlueTile q={-3} r={1} s={1} />
        <BlueTile q={-3} r={2} s={1} />
        <PlayerTile q={-3} r={3} s={1} />

        {/* Column 3 */}
        <BlueTile q={-2} r={-1} s={1} />
        <RedTile q={-2} r={0} s={1} />
        <BlueTile q={-2} r={1} s={1} />
        <RedTile q={-2} r={2} s={1} />
        <BlueTile q={-2} r={3} s={1} />

        {/* Column 4 */}
        <BlueTile q={-1} r={-1} s={1} />
        <RedTile q={-1} r={0} s={1} />
        <RedTile q={-1} r={1} s={1} />
        <BlueTile q={-1} r={2} s={1} />

        {/* Column 5 */}
        <BlueTile q={0} r={-2} s={1} />
        <RedTile q={0} r={-1} s={1} />
        <MecatolTile q={0} r={0} s={1} />
        <RedTile q={0} r={1} s={1} />
        <BlueTile q={0} r={2} s={1} />

        {/* Column 6 */}
        <BlueTile q={1} r={-2} s={1} />
        <RedTile q={1} r={-1} s={1} />
        <RedTile q={1} r={0} s={1} />
        <BlueTile q={1} r={1} s={1} />

        {/* Column 7 */}
        <BlueTile q={2} r={-3} s={1} />
        <RedTile q={2} r={-2} s={1} />
        <BlueTile q={2} r={-1} s={1} />
        <RedTile q={2} r={0} s={1} />
        <BlueTile q={2} r={1} s={1} />

        {/* Column 8 */}
        <PlayerTile q={3} r={-3} s={1} />
        <BlueTile q={3} r={-2} s={1} />
        <BlueTile q={3} r={-1} s={1} />
        <PlayerTile q={3} r={0} s={1} />

        {/* Column 9 */}
        <BlueTile q={4} r={-3} s={1} />
        <RedTile q={4} r={-2} s={1} />
        <BlueTile q={4} r={-1} s={1} />
      </>
    </Grid>
  );
};

export default RectanglePlus;
