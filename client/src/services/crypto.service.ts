import axios from "axios";

const API_URL = "http://localhost:4000";

const api = {
  // @Get get list of latest 10 currencies
  // @params
  getCurrencyList: () => axios.get(`${API_URL}/getCurrencyList`),
};

export default api;
