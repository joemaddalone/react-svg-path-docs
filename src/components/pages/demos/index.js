import React from "react";
import { Svg } from "react-svg-path";
import { translate as t } from "../../../i18n/i18n";
import DagNodes from "../../demos/dag/DagNodes";
import Pie from "../../demos/complex/Pie";
import Donut from "../../demos/complex/Donut";
import SparkLine from "../../demos/complex/SparkLine";
import BarChart from "../../demos/complex/BarChart/BarChart";
import Football from "../../demos/complex/Football/Football";
import Dimensions from "../../demos/complex/Dimensions/Dimensions";
import TargetDemo from "../../demos/targets/TargetDemo";
import Clock from "../../demos/complex/Clock";
import Elements from "../../demos/Elements";
export const Demos = () => {
  const pieData = [
    {
      color: "#086972",
      percent: 20,
      nested: [
        { color: "rgba(0,100,25,0.9)", percent: 10 },
        { color: "rgba(0,100,25,0.8)", percent: 10 },
      ],
    },
    {
      color: "#01a9b4",
      percent: 30,
      nested: [
        { color: "rgba(0,100,25,0.7)", percent: 10 },
        { color: "rgba(0,100,25,0.6)", percent: 10 },
        { color: "rgba(0,100,25,0.5)", percent: 10 },
      ],
    },
    {
      color: "#87dfd6",
      percent: 50,
      nested: [
        { color: "rgba(0,100,25,0.4)", percent: 25 },
        { color: "rgba(0,100,25,0.3)", percent: 25 },
      ],
    },
  ];

  const barData = [
    { val: 100, qty: 245, name: "A" },
    { val: 200, qty: 200, name: "B" },
    { val: 300, qty: 207, name: "C" },
    { val: 425, qty: 350, name: "D" },
    { val: 555, qty: 125, name: "E" },
    { val: 150, qty: 50, name: "F" },
    { val: 330, qty: 10, name: "G" },
    { val: 340, qty: 75, name: "H" },
    { val: 200, qty: 86, name: "I" },
    { val: 600, qty: 100, name: "J" },
    { val: 333, qty: 77, name: "K" },
    { val: 78, qty: 20, name: "L" },
    { val: 125, qty: 300, name: "M" },
  ];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const sparkData = Array.from({ length: 50 }).map(() => getRandomInt(-10, 10));
  return (
    <>
      <h1>{t("pages.demos.title")}</h1>
      <p>{t("pages.demos.intro")}</p>
      <div>
        <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
          <h4>Periodic table of elements</h4>
          <Elements />
          <a
            href="https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/Elements"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
        <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
          <h4>Bar Chart</h4>
          <BarChart data={barData} variables={["val", "qty"]} label="name" />
          <a
            href="https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/BarChart/BarChart.js"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
        <div className="dag">
          <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
            <h4>Diagram</h4>
            <DagNodes />
            <a
              href="https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/dag/DagNodes.js"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("common.source")}
            </a>
          </div>
        </div>
        <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
          <h4>Measurements</h4>
          <Dimensions />
          <a
            href="https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/Dimensions"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
        <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
          <h4>Designs</h4>
          <TargetDemo />
          <a
            href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/targets`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
        <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
          <h4>NFL football field (to scale)</h4>
          <Football width={850} />
          <a
            href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/Football/Football.js`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
      </div>
      <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
        <h4>Pie/Donut Charts</h4>
      </div>
      <div
        className="complex flex items-center justify-around flex-wrap"
        style={{ maxWidth: 800, minHeight: 180 }}
      >
        <div className="flex flex-column items-center justify-center">
          <Svg width={160} height={160}>
            <Pie size={150} cx={80} cy={80} data={pieData} />
          </Svg>
          <a
            href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/Pie.js`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
        <div className="flex flex-column items-center justify-center">
          <Svg width={160} height={160}>
            <Donut width={25} size={150} cx={80} cy={80} data={pieData} />
          </Svg>
          <a
            href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/Donut.js`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
      </div>
      <div
        className="complex flex items-center justify-around flex-wrap"
        style={{ maxWidth: "800px", minHeight: 160 }}
      >
        <Svg width={180} height={180}>
          <Pie size={130} cx={90} cy={90} data={pieData} />
          <Donut
            width={20}
            size={175}
            cx={90}
            cy={90}
            stroke="#fff"
            data={pieData.map((pd) => pd.nested).flat()}
          />
        </Svg>
      </div>
      <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
        <h4>Line Chart</h4>
        <div className="flex flex-column">
          <SparkLine width={800} height={100} data={sparkData} />
          <a
            href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/SparkLine.js`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("common.source")}
          </a>
        </div>
      </div>
      <div style={{ margin: 20, display: "flex", flexDirection: "column" }}>
        <h4>Functioning clock</h4>
        <Clock size={400} />
        <a
          href={`https://github.com/joemaddalone/react-svg-path-docs/blob/master/src/components/demos/complex/Clock.js`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("common.source")}
        </a>
      </div>
    </>
  );
};
