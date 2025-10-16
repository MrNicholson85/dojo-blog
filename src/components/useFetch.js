import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(async (res) => {
          // If response not OK, read text to include context in the error
          if (!res.ok) {
            const body = await res.text().catch(() => "");
            const snippet = body ? body.slice(0, 200) : "(no body)";
            throw new Error(
              `HTTP ${res.status} ${res.statusText}: ${snippet}`
            );
          }

          const contentType = res.headers.get("content-type") || "";
          if (!contentType.includes("application/json")) {
            const body = await res.text().catch(() => "");
            const snippet = body ? body.slice(0, 200) : "(no body)";
            throw new Error(
              `Expected JSON but received '${contentType || "unknown"}': ${snippet}`
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
            return;
          }
          setError(e.message);
          setIsPending(false);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
