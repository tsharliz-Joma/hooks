import React, { useState } from 'react';


function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
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