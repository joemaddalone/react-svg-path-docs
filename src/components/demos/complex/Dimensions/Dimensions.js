import React from "react";
import { Svg, Distance, Circle } from "react-svg-path";

const App = () => {
  const height = 450;
  const width = 850;
  const margin = 1;
  const quarterHeight = height * 0.25;
  const quarterWidth = width * 0.25;
  return (
    <div>
      <Svg
        width={width + margin}
        height={height + margin}
        scale
        style={{ maxWidth: width + margin }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Circle
            key={i}
            size={70 * (i + (i * 2))}
            fill="none"
            stroke="#ddd"
            strokeDasharray={4}
          />
        ))}

        <Distance
          color="green"
          ex={width}
          ey={quarterHeight * 2}
          markers="triangle"
        />
        <Distance
          color="green"
          ex={quarterWidth * 2}
          ey={height}
          markerEnd="triangle"
        />
        <Distance
          color="orange"
          ex={quarterWidth * 2}
          ey={0}
          markerEnd="triangle"
          text="CUSTOM TEXT"
          dotted
        />
        <Distance
          color="green"
          sx={quarterWidth}
          sy={0}
          ex={quarterWidth}
          ey={height}
          dotted
          markers="arrow"
        />
        <Distance color="green" ex={width} ey={0} markerEnd="triangle" />
        <Distance color="green" ex={quarterWidth} ey={quarterHeight * 3} />
        <Distance
          color="red"
          sx={0}
          sy={0}
          ex={width}
          ey={height}
          markers="arrow"
        />
        <Distance
          color="green"
          sx={quarterWidth}
          sy={quarterHeight * 3}
          ex={0}
          ey={quarterHeight * 3}
          markerEnd="arrow"
          markerStart="line"
        />
      </Svg>
    </div>
  );
};

export default App;
