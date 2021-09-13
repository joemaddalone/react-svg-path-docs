import React, { useState } from "react";
import Path, { Circle, Square, Svg, Text } from "react-svg-path";
import dagSetup from "./dagSetup";
import "./dag.css";

const algorithms = ["layered", "stress", "mrtree", "force"];

const DagNodes = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(true);
  const [algo, setAlgo] = useState(algorithms[0]);

  React.useEffect(() => {
    createDag();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algo]);

  const onChangeAlgo = (e) => {
    setAlgo(e.target.value);
  };

  const createDag = () => {
    dagSetup("DOWN", algo)
      .then(setData)
      .catch()
      .finally(() => setLoading(false));
  };

  const createConnectors = () => {
    const { edges } = data;
    const p = new Path();
    edges.forEach(({ sections }) => {
      if (sections) {
        p.M(sections[0].startPoint.x, sections[0].startPoint.y);
        if (sections[0].bendPoints) {
          sections[0].bendPoints.forEach((b) => {
            p.L(b.x, b.y);
          });
        }
        p.L(sections[0].endPoint.x, sections[0].endPoint.y);
      }
    });

    return p.toString();
  };

  if (loading) {
    return <p>loading...</p>;
  } else {
    const squareNodes = data.children
      .slice(0, 5)
      .map((s) => ({ ...s, x: s.x + 12.5, y: s.y + 12.5 }));
    const circleNodes = data.children
      .slice(5)
      .map((s) => ({ ...s, x: s.x + 12.5, y: s.y + 12.5 }));
    return (
      <div>
        <div className="ui form">
          <div className="inline fields">
            {algorithms.map((a) => {
              return (
                <div key={a} className="field">
                  <div className="ui radio checkbox">
                    <input
                      id={a}
                      type="radio"
                      name="algo"
                      value={a}
                      checked={algo === a}
                      tabIndex="0"
                      className="hidden"
                      onChange={onChangeAlgo}
                    />
                    <label htmlFor={a}>{a}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Svg
          width={data.width}
          height={data.height}
          scale
          style={{ maxWidth: 1200 }}
        >
          <path stroke="#222" strokeWidth={1} d={createConnectors()} />
          {squareNodes.map(({ x, y, width }, index) => {
            return (
              <Square
                className="node square"
                key={index}
                cx={x}
                cy={y}
                size={width}
                onClick={() => alert(`clicked node #${index}`)}
              >
                <Text
                  oy={2}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#fff"
                >
                  {index}
                </Text>
              </Square>
            );
          })}
          {circleNodes.map(({ x, y, width }, index) => {
            return (
              <Circle
                key={index}
                cx={x}
                cy={y}
                size={width * 1.1}
                sides={5}
                className="node circle"
                onClick={() => alert(`clicked node #${index + 5}`)}
              >
                <Text
                  oy={2}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#fff"
                >
                  {index + 5}
                </Text>
              </Circle>
            );
          })}
        </Svg>
      </div>
    );
  }
};

export default DagNodes;
