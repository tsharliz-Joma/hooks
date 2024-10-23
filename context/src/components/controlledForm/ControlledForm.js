import React, { useState } from "react";
import './ControlledForm.css';

const ControlledForm = () => {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  };
  return (
    <form className="form-container-2" onSubmit={submit}>
      <input
        type="text"
        placeholder="Sound..."
        value={sound}
        onChange={(e) => setSound(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Color..."
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default ControlledForm;
