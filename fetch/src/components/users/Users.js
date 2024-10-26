import React, { useEffect, useState } from "react";
import './Users.css';

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData)
  }, []);

  if (data) {
    return (
      <div className="users-container">
        <h1>Users</h1>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }
}

export default Users;
