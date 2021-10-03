import React from "react";
import Path, { Svg, Group, RoundedSquare, Text, Rect } from "react-svg-path";
import Atom from "./Atom";
import Modal from "./Modal";
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
const modal = {
  height: 800,
  width: 800,
};
const summaryConfig = {
  width: modal.width,
  height: modal.height,
  x: (w + margin) / 2 - modal.width / 2,
  y: (h + margin) / 2 - modal.height / 2,
};

const Table = () => {
  const [open, setOpen] = React.useState(null);
  return (
    <Svg
      width={w + margin}
      height={h + margin}
      scale
      style={{ maxWidth: 1200 }}
    >
      <Rect width={0} height={0} cx={650} cy={200}>
        <Text fill="#222" className="big middle">
          The Periodic Table of Elements
        </Text>
      </Rect>
      <Group transform={`translate(${margin / 2}, ${margin / 2})`}>
        <Group>
          {cells.map(({ cx, cy, size, value }, index) => (
            <RoundedSquare
              onClick={(e) => {
                e.stopPropagation();
                if (!open) {
                  setOpen(value);
                }
              }}
              radius={10}
              className={`cell ${value.category.replace(/ /g, "-")}`}
              cx={cx}
              cy={cy}
              key={value}
              size={size * 0.95}
            >
              <Text className="big middle">{value.symbol}</Text>
              <Text className="small middle" oy={25}>
                {value.name}
              </Text>
              <Text ox={-size / 2 + 10} oy={-size / 2 + 25} className="small">
                {value.number}
              </Text>
            </RoundedSquare>
          ))}
        </Group>
      </Group>
      {open ? (
        <Modal
          width={modal.width}
          height={modal.height}
          close={() => setOpen(null)}
        >
          <foreignObject
            x={summaryConfig.x + 20}
            y={summaryConfig.y + 40}
            width={summaryConfig.width - 80}
            height={summaryConfig.height}
          >
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "#000" }}>
              <h2>
                {open.name} ({open.symbol})
              </h2>
              <p style={{ fontSize: "125%" }}>{open.summary}</p>
            </div>
          </foreignObject>
          <Group transform="translate(0, 80)">
            <Atom circ={400} shells={open.shells} />
            <Text className="middle"  transform="translate(0, 225)">
              Electron configuration of {open.name}
            </Text>
          </Group>
        </Modal>
      ) : null}
    </Svg>
  );
};

export default Table;
