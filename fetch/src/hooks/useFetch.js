import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return { loading, data, error };
};
