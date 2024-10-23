import React, { useRef } from "react";
import './Form.css';

const Form = () => {
  const soundRef = useRef();
  const colorRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = soundRef.current.value;
    const colorVal = colorRef.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    soundRef.current.value = "";
    colorRef.current.value = "";
  };
  return (
    <form className="form-container" onSubmit={submit}>
      <input ref={soundRef} type="text" placeholder="Sound..."></input>
      <input ref={colorRef} type="text" placeholder="Color..."></input>
      <button>Add</button>
    </form>
  );
};

export default Form;
