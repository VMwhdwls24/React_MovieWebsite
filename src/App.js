import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState(0);
  const [dollars, setDollars] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSelect = e => {
    setSelectedCoin(e.target.selectedIndex);
    console.log(coins[selectedCoin].quotes.USD.price);
  };
  const onChange = e => {
    if (e.target.value !== null) setInput(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setDollars(input);
    console.log(dollars);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map(coin => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="number"
          step="0.0000000000000001"
          placeholder="USD to convert..."
        />
        <button>Convert</button>
      </form>
      <h3>
        {loading
          ? ""
          : `You can got ${dollars / coins[selectedCoin].quotes.USD.price} 
        ${coins[selectedCoin].symbol}
        with your
        ${dollars}
        dollars`}
      </h3>
    </div>
  );
}

export default App;
