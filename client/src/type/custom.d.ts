type CryptoCurrency = {
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
    };
  };
};
