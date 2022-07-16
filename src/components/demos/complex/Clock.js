import "./Clock.css";
import Path, {
  Svg,
  Circle,
  RadialLines,
  Line,
  Rect,
  MarkerArrow,
  Text,
} from "react-svg-path";

import { useState, useEffect } from "react";

export const degreeToAngle = (value, division, cx, cy, radius) => {
  const degree = (360 / division) * value - 90;
  const { x: ex, y: ey } = Path.polarToCartesian(cx, cy, radius, degree);
  return { ex, ey };
};

export const time = () => {
  const d = new Date();
  return {
    second: d.getSeconds(),
    minute: d.getMinutes(),
    hour: d.getHours(),
    millis: d.getMilliseconds(),
    date: d.getDate(),
    day: d.toLocaleDateString("en", { weekday: "short" }),
    month: d.toLocaleDateString("en", { month: "long" }),
  };
};

const Clock = ({ size = 400 }) => {
  const cx = size / 2;
  const cy = size / 2;
  const margin = 40;
  const fontBase = size / 16;
  const [state, setState] = useState(time());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(time());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hoursPoints = Path.radialPoints(size * 0.425, cx, cy, 12);
  const minutePoints = Path.radialPoints(size * 0.275, cx, cy, 12);
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="Clock">
      <Svg width={size + margin} height={size + margin} className="clock" scale>
        <MarkerArrow id="marker-h" color="blue" />
        <MarkerArrow id="marker-s" color="red" />
        <MarkerArrow id="marker-m" color="green" />
        <g transform={`translate(${margin / 2}, ${margin / 2})`}>
        {hoursPoints.map((point, index) => {
            return (
              <Text
                className="middle"
                key={hours[index]}
                x={point[0]}
                y={point[1]}
                fill="#333"
                fontSize={`${fontBase}px`}
              >
                {hours[index]}
              </Text>
            );
          })}
          {minutePoints.map((point, index) => {
            const m = index * 5;
            return (
              <Text
                key={index}
                x={point[0]}
                y={point[1]}
                className="middle"
                fontSize={`${fontBase / 2}px`}
                fill="red"
              >
                {m}
              </Text>
            );
          })}
          <Circle size={size} cx={cx} cy={cy} strokeWidth={5}>
            <RadialLines
              innerSize={size * 0.725}
              outerSize={size * 0.65}
              points={12}
              strokeWidth={5}
            />
            <RadialLines
              innerSize={size * 0.7}
              outerSize={size * 0.65}
              points={60}
              strokeWidth={1}
            />
          </Circle>
          <Rect
            cx={cx + 55}
            cy={cy - 12}
            width={80}
            height={30}
            fill="#222"
            stroke="none"
          >
            <Rect ox={-16} width={44} height={26} fill="#fff" stroke="none">
              <Text dy={2} className="middle" fill="#222">
                {state.day.toUpperCase()}
              </Text>
              <Text dy={2} dx={40} className="middle" fill="#fff">
                {state.date}
              </Text>
            </Rect>
            <Text dy={30} fontSize={11} fill="#444" className="middle">
              {state.month.toUpperCase()}
            </Text>
          </Rect>
          <Line
            strokeWidth={6}
            markerEnd="url(#marker-h)"
            sx={cx}
            sy={cy}
            stroke="blue"
            {...degreeToAngle(state.hour, 12, cx, cy, size * 0.315)}
          />
          <Line
            strokeWidth={3}
            markerEnd="url(#marker-m)"
            sx={cx}
            sy={cy}
            stroke="green"
            {...degreeToAngle(state.minute, 60, cx, cy, size * 0.375)}
          />
          <Line
            sx={cx}
            sy={cy}
            strokeWidth={1}
            stroke="red"
            {...degreeToAngle(state.second, 60, cx, cy, size * 0.45)}
          />
          <Circle cx={cx} cy={cy} size={10} fill="#fff" stroke="#222" />
        </g>
      </Svg>
    </div>
  );
};

export default Clock;
