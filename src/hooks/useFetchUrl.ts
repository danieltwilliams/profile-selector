import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchUrl = <T>(
  url: string
): { result: T | null; error: boolean; loading: boolean | null } => {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => response.data)
      .then((response) => {
        setResult(response);
        setLoading(false);
      })
      .catch((error) => {
        // would set in prod
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return {
    result,
    loading,
    error,
  };
};
