import React, { useState, useEffect } from 'react';

const CustomHookSearch = (url, searchStr) => {
  const [res, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, { searchStr });
      setResult(response);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    const delayTyping = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(delayTyping);
  }, [searchStr]);

  return { res, error };
};

export default CustomHookSearch;