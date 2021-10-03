import React from "react";
import Path, { Svg, Circle, Group, Rect } from "react-svg-path";

const Atom = ({ cx, cy, shells, circ = 350 }) => {
  const step = circ/shells.length
  const electron_config = shells.slice().reverse();
  const incrementalRing = electron_config.map((s, i) => circ - step * i);
  const shellPoints = electron_config.map((s, i) =>
    Path.radialPoints(incrementalRing[i] / 2, cx, cy, s)
  );

  const getTimes = (arr) => {
    const max = 5000;
    let min;
    return arr.map((n) => {
      min = Math.max(n * 1000, max);
      return Math.floor(Math.random() * (max - min)) + min;
    });
  };

  const times = getTimes(electron_config);

  return (
    <Rect width={circ} height={circ} cx={cx} cy={cy} className="atom">
      {incrementalRing.map((s, i) => (
        <Group
          key={i}
          className="ring"
          style={{ animationDuration: `${times[i] / 1000}s` }}
        >
          <Circle size={s} fill="none" stroke="#222" strokeWidth={0.5} />
          {shellPoints[i].map((p, q) => {
            return (
              <Circle
                key={`${q}`}
                cx={+p[0]}
                cy={+p[1]}
                size={6}
                fill="#20a0c1"
              />
            );
          })}
        </Group>
      ))}
    </Rect>
  );
};

export default Atom;
