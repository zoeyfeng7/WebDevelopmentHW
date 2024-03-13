import React from "react";
import Cell, { CellProvider, useCell } from "./Cell";

const Grid = () => {
  const { activeCells } = useCell();

  return (
    <div>
      <div>Count: {activeCells}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Cell />
          <Cell />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <CellProvider>
      <Grid />
    </CellProvider>
  );
};

export default App;
