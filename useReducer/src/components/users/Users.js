import React, { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setData)
  }, []);

  if (data) {
    return (
      <div>
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
