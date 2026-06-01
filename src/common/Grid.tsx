import { HexGrid, Layout } from "react-hexgrid";

const Grid = ({
  children,
  viewBox,
}: {
  children: React.ReactElement;
  viewBox: string;
}) => (
  <HexGrid viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
    <Layout flat origin={{ x: 0, y: 0 }} size={{ x: 10, y: 10 }} spacing={1.05}>
      {children}
    </Layout>
  </HexGrid>
);

export default Grid;
