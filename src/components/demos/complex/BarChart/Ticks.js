import { Line, Text } from "react-svg-path";
const Ticks = ({ ticks, width, height, margins, yScale }) => {
  return (
    <>
      {ticks.map((y) => {
        return (
          <g key={y}>
            <Line
              strokeWidth={0.5}
              stroke="#888"
              sx={10}
              sy={height - yScale(y)}
              ex={width - margins.right}
              ey={height - yScale(y)}
            >
              <Text
                fontSize="0.75em"
                textAnchor="start"
                attach="start"
                ox={-15}
              >
                {y}
              </Text>
            </Line>
          </g>
        );
      })}
    </>
  );
};

export default Ticks;
