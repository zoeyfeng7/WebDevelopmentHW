import React, { useState, useContext, createContext } from "react";
import "./styles.css";

// Create context for managing cell state
const CellContext = createContext();

// Child component for individual cell
const Cell = ({ id }) => {
  const { toggleCell } = useContext(CellContext);
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    toggleCell(isOn ? -1 : 1); // Increment or decrement counter based on current state
  };

  return (
    <div
      className="cell"
      style={{ backgroundColor: isOn ? "black" : "white" }}
      onClick={handleClick}
    ></div>
  );
};

// Parent component for grid and counter
const Grid = () => {
  const [counter, setCounter] = useState(0);

  // Function to toggle counter based on cell state change
  const toggleCell = (change) => {
    setCounter((prevCounter) => prevCounter + change);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div className="grid">
        <CellContext.Provider value={{ toggleCell }}>
          <Cell id={1} />
          <Cell id={2} />
          <Cell id={3} />
          <Cell id={4} />
        </CellContext.Provider>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}
