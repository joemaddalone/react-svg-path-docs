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

const cellSize = 95;
const cells = Path.positionByArray(cellSize, grid, 0, 0);
const margin = 40;
const w = 18 * cellSize;
const h = 10 * cellSize;
const modal = {
  height: h - 100,
  width: w / 2,
};

const Table = () => {
  const [open, setOpen] = React.useState(null);
  return (
    <Svg
      width={w + margin}
      height={h + margin}
      scale
      style={{ maxWidth: 850 }}
    >
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
              <Text dy={10} className="big middle">
                {value.symbol}
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
          <Text className="middle big" oy={-350}>
            {open.name} ({open.symbol})
          </Text>
          <Group transform="translate(0, 40)">
            <Atom circ={500} shells={open.shells} />
            <Text
              className="middle"
              style={{ fontSize: "175%" }}
              transform="translate(0, 340)"
            >
              Electron configuration of {open.name}
            </Text>
          </Group>
        </Modal>
      ) : null}
    </Svg>
  );
};

export default Table;
