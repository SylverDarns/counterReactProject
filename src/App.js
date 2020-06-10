import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    const randomColor = require("randomcolor"); // import the script
    const ranColor = randomColor();
    setColor(ranColor);
  }, [count]);

  const style = {
    color: color,
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 style={style}>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
