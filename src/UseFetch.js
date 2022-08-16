import { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
    //   axios
    //     .get(url)
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            setLoading(false);
            setData(data);
          })
        .catch((err) => {
          setError(err);
        })
    }, [url]);
  
    return { data, loading, error };
  }
 
export default UseFetch;