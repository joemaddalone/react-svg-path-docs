import React from "react";
import Path, { Svg, Group, RoundedSquare, Text, Rect } from "react-svg-path";
import data from "./data.json";
import "./style.css";

const elements = data.elements
  .slice()
  .map((e) => ({ ...e, xpos: e.xpos - 1, ypos: e.ypos - 1 }));

const grid = [];
for (let index = 0; index < 10; index++) {
  grid.push(Array.from({ length: 17 }));
}
elements.forEach((e) => {
  grid[e.ypos][e.xpos] = e;
});

const cellSize = 100;
const cells = Path.positionByArray(cellSize, grid, 0, 0);
const margin = 40;
const w = 18 * cellSize;
const h = 10 * cellSize;
const summaryConfig = {
  width: 925,
  height: 250,
  cx: 715,
  cy: 175,
};
const sumDX = summaryConfig.cx - summaryConfig.width / 2 + 10;
const sumDY = summaryConfig.cy - summaryConfig.height / 2;
const Table = () => {
  const [active, setActive] = React.useState(null);
  return (
    <Svg
      width={w + margin}
      height={h + margin}
      scale
      onMouseOver={() => setActive(null)}
    >
      <Rect {...summaryConfig} fill="none" stroke="#ccc">
        {active ? (
          <foreignObject
            x={sumDX}
            y={sumDY}
            width={summaryConfig.width - 20}
            height={summaryConfig.height - 20}
          >
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "#000" }}>
              <h2>
                {active.name} ({active.symbol})
              </h2>
              <p>{active.summary}</p>
            </div>
          </foreignObject>
        ) : (
          <Text className="big middle">The Periodic Table of Elements</Text>
        )}
      </Rect>
      <Group transform={`translate(${margin / 2}, ${margin / 2})`}>
        <Group>
          {cells.map(({ cx, cy, size, value }, index) => (
            <RoundedSquare
              onMouseOver={(e) => {
                e.stopPropagation();
                setActive(value);
              }}
              radius={10}
              className={`cell ${value.category.replace(/ /g, "-")}`}
              cx={cx}
              cy={cy}
              size={size * 0.95}
            >
              <Text className="big middle">{value.symbol}</Text>
              <Text className="small middle" oy={25}>
                {value.name}
              </Text>
              <Text ox={-size / 2 + 5} oy={-size / 2 + 15} className="small">
                {value.number}
              </Text>
            </RoundedSquare>
          ))}
        </Group>
      </Group>
    </Svg>
  );
};

export default Table;
