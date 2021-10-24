import { Line } from "react-svg-path";

const Frame = ({ width, height, margins }) => {
  return (
    <>
      <Line
        strokeWidth={0.5}
        stroke="#ccc"
        sx={25}
        sy={0}
        ex={25}
        ey={height}
      />
      <Line
        strokeWidth={0.5}
        stroke="#ccc"
        sx={margins.left}
        sy={height}
        ex={width - margins.right}
        ey={height}
      />
    </>
  );
};

export default Frame;