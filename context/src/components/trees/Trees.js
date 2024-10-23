import React, { useContext } from "react";
import "./Trees.css";
import { TreesContext } from "../..";

const Trees = () => {
  // Deconstruct TreesContext to get the trees object.
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trees;
