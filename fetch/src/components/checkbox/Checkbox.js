import React, { useReducer } from "react";

import "./Checkbox.css";

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div className="checkbox-container">
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default Checkbox;
