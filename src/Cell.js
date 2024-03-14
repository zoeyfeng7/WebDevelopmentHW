import React, { useState } from "react";
import { useCell } from "./CellContext"; // 假设你将Context相关的代码移到了CellContext.js

const Cell = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const { toggleCellState } = useCell();

  const handleClick = () => {
    setIsActive((prev) => !prev);
    toggleCellState(isActive);
  };

  const style = {
    width: "100px",
    height: "100px",
    border: "1px solid grey",
    backgroundColor: isActive ? "black" : "white",
    // className可以用来添加额外的样式
  };

  return <div className={className} style={style} onClick={handleClick} />;
};

export default Cell;
