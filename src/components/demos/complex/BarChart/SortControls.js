import { Text, Rect } from "react-svg-path";
const SortControls = ({ cx, cy, sorter, setSorter, width, height }) => {
  return (
    <g>
      <Rect cx={cx} cy={cy} width={width / 2} height={50} fill="none">
        <Rect
          className={`btn ${sorter === "alphaa" ? "active" : ""}`}
          onClick={() => setSorter("alphaa")}
          ox={-150}
          width={75}
          height={25}
        >
          <Text className="btn-text" fill="white">
            LABEL ⬇
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "alphad" ? "active" : ""}`}
          onClick={() => setSorter("alphad")}
          ox={-75}
          width={75}
          height={25}
        >
          <Text className="btn-text" fill="white">
            LABEL ⬆
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "valuea" ? "active" : ""}`}
          onClick={() => setSorter("valuea")}
          width={75}
          height={25}
        >
          <Text className="btn-text" fill="white">
            DATA ⬆
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "valued" ? "active" : ""}`}
          onClick={() => setSorter("valued")}
          width={75}
          ox={75}
          height={25}
        >
          <Text className="btn-text" fill="white">
            DATA ⬇
          </Text>
        </Rect>
      </Rect>
    </g>
  );
};

export default SortControls;
