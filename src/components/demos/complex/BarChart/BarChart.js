import { Svg } from "react-svg-path";
import Controls from "./Controls";
import Frame from "./Frame";
import Ticks from "./Ticks";
import Bars from "./Bars";
import { scaleLinear } from "d3-scale";
import { useState } from "react";
import "./BarChart.css";

const BarChart = ({ data }) => {
  const [sorter, setSorter] = useState("alphaa");
  const sorters = {
    alphaa: (a, b) => a.name.localeCompare(b.name),
    alphad: (a, b) => b.name.localeCompare(a.name),
    valuea: (a, b) => a.val - b.val,
    valued: (a, b) => b.val - a.val,
  };

  const max = Math.max.apply(
    null,
    data.map((o) => o.val)
  );

  const width = 850;
  const margins = { left: 40, right: 40, top: 40, bottom: 40 };
  const height = 300;
  const yScale = scaleLinear()
    .domain([0, max])
    .range([0, height - margins.bottom]);
  const ticks = yScale.ticks(5);

  const sortedValues = [...data].sort(sorters[sorter]);

  return (
    <div className="bar-app">
      <Svg
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}
        style={{ maxWidth: 850 }}
        scale
        className="bar-graph"
      >
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <Controls
            cx={225}
            cy={0}
            width={width / 2}
            height={50}
            sorter={sorter}
            setSorter={setSorter}
          />
          <Frame width={width} height={height} margins={margins} />
          <Ticks
            ticks={ticks}
            height={height}
            width={width}
            margins={margins}
            yScale={yScale}
          />
          <Bars
            values={sortedValues}
            yScale={yScale}
            width={width}
            height={height}
          />
        </g>
      </Svg>
    </div>
  );
};

export default BarChart;
