import React, { createContext, useContext, useState } from "react";

const CellContext = createContext();

export const useCell = () => useContext(CellContext);

export const CellProvider = ({ children }) => {
  const [activeCells, setActiveCells] = useState(0);

  const toggleCellState = (isActive) => {
    setActiveCells((prev) => prev + (isActive ? -1 : 1));
  };

  const value = {
    activeCells,
    toggleCellState,
  };

  return <CellContext.Provider value={value}>{children}</CellContext.Provider>;
};
