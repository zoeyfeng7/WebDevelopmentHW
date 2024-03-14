import React from "react";
import { CellProvider } from "./CellContext";
import Grid from "./Grid";

const App = () => {
  return (
    <CellProvider>
      <Grid />
    </CellProvider>
  );
};

export default App;
