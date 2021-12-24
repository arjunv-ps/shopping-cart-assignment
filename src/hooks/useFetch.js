import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const resp = await fetch(url);
      const apiData = await resp.json();
      setData(apiData);
      setLoading(false);
    } catch (error) {
      setError('Failed to get data');
    }
  };

  useEffect(fetchApi, []);

  return { loading, data, error };
};
