import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, { archiveCheck }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (archiveCheck === true) {
          setData(filterArchives(response.data));
        } else {
          setData(response.data);
        }
        setSuccess(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const filterArchives = (items) => {
    const filtered = items.filter((item) => {
      return item.is_archived === false;
    });

    return filtered;
  };

  return { data, loading, error, success };
}

export default useFetch;
