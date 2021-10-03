import React from "react";
import Path, { Svg, Circle, Group } from "react-svg-path";

import "./App.css";

const App = ({ active }) => {
  // const shells = [2, 8, 18, 23, 8, 2];
  // const shells = [2, 8, 1].reverse();
  const shells = [2, 8, 18, 32, 29, 8, 2].reverse();
  // const shells = [1]
  const incrementalRing = shells.map((s, i) => 100 - 12 * i);
  const shellPoints = shells.map((s, i) =>
    Path.radialPoints(incrementalRing[i] / 2, 150, 150, s)
  );
  const points = Path.radialPoints(50, 150, 150, 32);
  console.log(shellPoints);

  const getTimes = (arr) => {
    const max = 10000;
    let min;
    return arr.map((n) => {
      min = Math.max(n * 1000, max);
      return Math.floor(Math.random() * (max - min)) + min;
    });
  };

  const times = getTimes(shells);

  return (
    <Svg width={300} height={300}>
      {incrementalRing.map((s, i) => (
        <Group
          className="ring"
          style={{ animationDuration: `${times[i] / 1000}s` }}
        >
          <Circle size={s} fill="none" stroke="#ccc" strokeWidth={0.5} />
          {shellPoints[i].map((p, q) => {
            return (
              <Circle
                key={`${q}`}
                cx={+p[0]}
                cy={+p[1]}
                size={2}
                fill="black"
              />
            );
          })}
        </Group>
      ))}
    </Svg>
  );
};

export default App;
