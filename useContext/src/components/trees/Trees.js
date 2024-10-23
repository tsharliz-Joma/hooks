import React, { useContext } from "react";
import "./Trees.css";
import { Trees2Context } from "../..";

const Trees = () => {
  // Deconstruct TreesContext to get the trees object.
  const { trees } = useContext(Trees2Context);
  return (
    <div className="trees-container">
      <h1 className="trees-header">Trees</h1>
      <ul className="trees-list">
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trees;
