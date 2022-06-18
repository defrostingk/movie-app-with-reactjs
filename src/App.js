import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState('none');
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChangeSelect = (event) => {
    setPrice(event.target.value);
  };
  const onChangeBalance = (event) => {
    setBalance(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChangeSelect}>
          <option key='-1' value='none'>
            Select a coin...
          </option>
          {coins.map((coin, idx) => (
            <option key={idx} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <hr />
      <span>If you have $</span>
      <input value={balance} onChange={onChangeBalance} type='number' />
      <span>, you can get {price === 'none' ? 0 : balance / price} coins</span>
    </div>
  );
}

export default App;
