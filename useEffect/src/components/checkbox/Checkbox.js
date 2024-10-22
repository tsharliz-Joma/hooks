import React, { useState } from 'react';
import './Checkbox.css';


function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  )
}

export default Checkbox;