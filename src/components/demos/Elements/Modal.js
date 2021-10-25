import React from "react";
import { Rect, SymX } from "react-svg-path";

const Modal = ({
  className,
  width,
  height,
  close,
  cx,
  cy,
  children,
  fill = "#f8f8f8",
}) => {
  return (
    <>
      <rect
        onClick={close}
        x={0}
        y={0}
        width="100%"
        height="100%"
        fill="#fff"
        fillOpacity={0.4}
      />
      <Rect
        className={`modal ${className}`}
        cx={cx}
        cy={cy}
        width={width}
        height={height}
        fill={fill}
        stroke="#ddd"
        strokeWidth={2}
      >
        <Rect
          ox={width / 2 - 25}
          oy={-(height / 2) + 25}
          className="pointer"
          width={15}
          height={15}
          onClick={close}
          fill="transparent"
        >
          <SymX
            className="no-pointer"
            width={15}
            height={15}
            stroke="black"
            strokeWidth={3}
          />
        </Rect>
        {children}
      </Rect>
    </>
  );
};

export default Modal;
