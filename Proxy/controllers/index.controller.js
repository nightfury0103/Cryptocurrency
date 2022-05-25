const axios = require("axios");
const { API_KEY, API_URL } = require("../config/constants");

const getCurrencyList = (req, res) => {
  axios
    .get(API_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
    })
    .then((resp) => {
      res.send(JSON.stringify(resp.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getCurrencyList,
};
