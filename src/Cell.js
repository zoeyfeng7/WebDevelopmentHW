import React, { useContext, useState } from "react";

const CellContext = React.createContext();

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

const Cell = () => {
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
  };

  return <div style={style} onClick={handleClick} />;
};

export default Cell;
