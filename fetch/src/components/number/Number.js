import React, { useReducer } from "react";
import "./Number.css";

function Number() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return (
    <div className="number-container" onClick={() => setNumber(1)}>
      <h1 className="number-title">Number</h1>
      <h2 className="number-value">{number}</h2>
    </div>
  );
}

export default Number;
