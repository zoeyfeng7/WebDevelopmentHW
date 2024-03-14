import React from "react";
import Cell from "./Cell"; // 确保路径正确
import { useCell } from "./CellContext"; // 假设你将Context相关的代码移到了CellContext.js

const Grid = () => {
  const { activeCells } = useCell();

  return (
    <div>
      <div>Count: {activeCells}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Cell className="cell-class" />
          <Cell className="cell-class" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Cell className="cell-class" />
          <Cell className="cell-class" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
