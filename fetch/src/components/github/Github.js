import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Github.css";

export const Github = ({ login }) => {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="github-container">
      <h1>Github User</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      {data.name && <h2>{data.name}</h2>}
      {data.location && <p>{data.location}</p>}
    </div>
  );
};
