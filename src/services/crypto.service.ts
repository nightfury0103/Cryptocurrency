import axios from "axios";

import { API_KEY, API_URL } from "../config/constants";

const api = {
  // @Get Currency List
  // @params limit = 10

  getCurrencyList: () =>
    axios.get(API_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    }),
};

export default api;
