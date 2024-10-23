import React, { useContext } from "react";
import "./TreesHooked.css";
import useTrees from "../../hooks/useTrees";

const TreesHooked = () => {
  // Deconstruct TreesContext to get the trees object.
  const { trees } = useTrees();
  return (
    <div className="trees-hooked">
      <h1>Trees</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreesHooked;
