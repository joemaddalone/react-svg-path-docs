import { Svg, Rect, Text } from "react-svg-path";
import SortControls from "./SortControls";
import Frame from "./Frame";
import Ticks from "./Ticks";
import Bars from "./Bars";
import { scaleLinear } from "d3-scale";
import { useState } from "react";
import "./BarChart.css";

const BarChart = ({ data, variables, label }) => {
  const [sorter, setSorter] = useState("alphaa");
  const [currentVariable, setCurrentVariable] = useState(variables[1]);
  const sorters = {
    alphaa: (a, b) => a[label].localeCompare(b[label]),
    alphad: (a, b) => b[label].localeCompare(a[label]),
    valuea: (a, b) => a[currentVariable] - b[currentVariable],
    valued: (a, b) => b[currentVariable] - a[currentVariable],
  };

  const max = Math.max.apply(
    null,
    data.map((o) => o[currentVariable])
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
          <SortControls
            cx={225}
            cy={20}
            width={width / 2}
            height={50}
            sorter={sorter}
            setSorter={setSorter}
          />
          {/* quick and dirty variable controls - circle back and clean up */}
          <Rect cx={800} cy={20} width={width / 2} height={50} fill="none">
            <Rect
              className={`btn ${currentVariable === variables[0] ? "active" : ""}`}
              onClick={() => setCurrentVariable(variables[0])}
              ox={-150}
              width={75}
              height={25}
            >
              <Text className="btn-text" fill="white">
                data:{variables[0]}
              </Text>
            </Rect>
            <Rect
              className={`btn ${currentVariable === variables[1] ? "active" : ""}`}
              onClick={() => setCurrentVariable(variables[1])}
              ox={-75}
              width={75}
              height={25}
            >
              <Text className="btn-text" fill="white">
                data:{variables[1]}
              </Text>
            </Rect>
          </Rect>
          <Frame width={width} height={height} margins={margins} />
          <Ticks
            ticks={ticks}
            height={height}
            width={width}
            margins={margins}
            yScale={yScale}
          />
          <Bars
            variable={currentVariable}
            label={label}
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
