import React, { useState } from "react";
import './Status.css';

function Status() {
  const [status, setStatus] = useState("Not deliverd");
  return (
    <div className="status">
      <div>The package is: {status}</div>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

export default Status;
