import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((current) => current + 1);
  useEffect(() => {
    console.log('Call the API...');
  }, []);
  useEffect(() => {
    if (keyword.length > 5) console.log('Search for', keyword);
  }, [keyword]);
  useEffect(() => {
    console.log('Counter has been changed');
  }, [counter]);
  useEffect(() => {
    console.log('Keyword or counter has been changed');
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
