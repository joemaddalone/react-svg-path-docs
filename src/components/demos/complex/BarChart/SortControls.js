import { Text, Rect } from "react-svg-path";
const SortControls = ({ cx, cy, sorter, setSorter, width, height }) => {
  return (
    <g>
      <Rect cx={cx} cy={cy} width={width / 2} height={50} fill="none">
        <Rect
          className={`btn ${
            sorter === "alphaa" || sorter === "alphad" ? "active" : ""
          }`}
          onClick={() => setSorter(sorter === "alphaa" ? "alphad" : "alphaa")}
          ox={-150}
          width={100}
          height={25}
        >
          <Text className="btn-text" fill="white">
            Sort Label
          </Text>
        </Rect>
        <Rect
          className={`btn ${
            sorter === "valuea" || sorter === "valued" ? "active" : ""
          }`}
          onClick={() => setSorter(sorter === "valuea" ? "valued" : "valuea")}
          ox={-50}
          width={100}
          height={25}
        >
          <Text className="btn-text" fill="white">
          Sort Data
          </Text>
        </Rect>
      </Rect>
    </g>
  );
};

export default SortControls;
