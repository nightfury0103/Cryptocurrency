import { useEffect, useState } from "react";

import api from "../services/crypto.service";

const useGetCurrencyList = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<CryptoCurrency[]>();
  const [error, setError] = useState();

  useEffect(() => {
    api
      .getCurrencyList()
      .then((res) => {
        setList(res.data.data as CryptoCurrency[]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, list, error };
};

export default useGetCurrencyList;
