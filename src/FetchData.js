import React, { useState, useEffect } from 'react';
import axios from 'axios';

//useEffect: run code on every render
function FetchData(url) {
  const [universities, setUniversities] = useState([]); // passing empty array in initial state
  const [error, setError] = useState([null]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(universities => {
        setUniversities(universities);
      })
      .catch(error => {
        setError(error);
      });
  }, [url]);

  return { universities, error };
}

export default FetchData;
