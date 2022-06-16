import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);
  console.log('I run all the time');
  useEffect(() => {
    console.log('Call the API...');
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
