import React from "react";
import "./TreesHooked.css";
import useTrees from "../../hooks/useTrees";

const TreesHooked = () => {
  const { trees } = useTrees();
  return (
    <div className="trees-hooked">
      <h1>Trees Hooked</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreesHooked;
