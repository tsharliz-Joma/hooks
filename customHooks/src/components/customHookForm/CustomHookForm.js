import React from "react";
import { useInput } from "../../hooks/useInput";
import "./CustomHookForm.css";

const CustomHookForm = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle("");
    resetColor("#000000");
  };
  return (
    <form className="form-container-3" onSubmit={submit}>
      <input
        type="text"
        placeholder="Sound..."
        {...titleProps}
        // titleProps from the useInput hook is an object with two properties: value and onChange.
        // Then is spreading the titleProps object into the input element.
      ></input>
      <input type="text" placeholder="Color..." {...colorProps}></input>
      <button>Add</button>
    </form>
  );
};

export default CustomHookForm;
