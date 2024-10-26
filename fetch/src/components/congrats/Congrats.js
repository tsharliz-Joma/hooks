import React, { useEffect, useState } from "react";
import "./Congrats.css";

function Congrats() {
  const [name, setName] = useState("John Doe");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `${name} is the best!`;
  }, [name]);

  useEffect(() => {}, [admin]);

  return (
    <div className="congrats">
      <h1>Congratulations {name}!</h1>
      <div className="winner">
        <button onClick={() => setName("Will")}>Change Winner</button>
      </div>
      <div className="admin">
        {admin ? "You are an admin" : "You are not an admin"}
        <button onClick={() => setAdmin(!admin)}>Toggle Admin</button>
      </div>
    </div>
  );
}

export default Congrats;
