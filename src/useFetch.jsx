import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [Err, setErr] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data from server");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
        setErr(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);
          setErr(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, Err };
};

export default useFetch;
