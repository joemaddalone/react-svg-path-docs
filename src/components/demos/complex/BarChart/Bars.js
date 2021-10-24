import { Line, Text } from "react-svg-path";

const Bars = ({ values, width, height, yScale }) => {
  return (
    <>
      {values.map(({ val, name }, index, arr) => {
        const barCount = arr.length;
        const xStart = 50;
        const xSpace = width - xStart;
        const barWidth = xSpace / (barCount * 2);
        const x = barWidth * index * 2;
        return (
          <g transform={`translate(${xStart}, 0)`} key={index}>
            <Line
              sx={x}
              sy={height}
              ex={x}
              ey={height - yScale(val)}
              strokeWidth={barWidth}
              stroke="rebeccapurple"
            />
            <Text fontSize="0.75em" x={x - 5} y={height + 20}>
              {name}
            </Text>
          </g>
        );
      })}
    </>
  );
};

export default Bars;
