import { Container, Table } from "react-bootstrap";

import useGetCurrencyList from "./hook/useGetCurrencyList";

const App = () => {
  const { loading, error, list } = useGetCurrencyList();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Can not query currency list, please try again.</p>;
  }

  return (
    <Container className="mt-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>USD Price</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((cryptocurrency, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{cryptocurrency.name}</td>
                <td>{cryptocurrency.symbol}</td>
                <td>{cryptocurrency.quote.USD.market_cap}</td>
                <td>{cryptocurrency.quote.USD.price}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
