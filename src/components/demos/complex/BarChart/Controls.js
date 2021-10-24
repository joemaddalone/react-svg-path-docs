import { Text, Rect } from "react-svg-path";
const Controls = ({cx, cy, sorter, setSorter, width, height}) => {
  return (
    <g>
      <Rect cx={225} cy={0} width={width / 2} height={50} fill="none">
	  <Rect
          className={`btn ${sorter === "alphaa" ? "active" : ""}`}
          onClick={() => setSorter("alphaa")}
		  ox={-150}
          width={75}
          height={25}
          fill="red"
          stroke="#222"
        >
          <Text className="btn-text" fill="white">
            alpha asc
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "alphad" ? "active" : ""}`}
          onClick={() => setSorter("alphad")}
          ox={-75}
          width={75}
          height={25}
          fill="red"
          stroke="#222"
        >
          <Text className="btn-text" fill="white">
            alpha desc
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "valuea" ? "active" : ""}`}
          onClick={() => setSorter("valuea")}
          width={75}
          height={25}
          fill="red"
          stroke="#222"
        >
          <Text className="btn-text" fill="white">
            value asc
          </Text>
        </Rect>
        <Rect
          className={`btn ${sorter === "valued" ? "active" : ""}`}
          onClick={() => setSorter("valued")}
          width={75}
		  ox={75}
          height={25}
          fill="red"
          stroke="#222"
        >
          <Text className="btn-text" fill="white">
            value desc
          </Text>
        </Rect>
      </Rect>
    </g>
  );
};

export default Controls;
