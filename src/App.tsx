import React, { useState, useEffect } from "react";
import api from "./services/crypto.service";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    api.getCurrencyList().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>asdfasdf</div>;
}

export default App;
