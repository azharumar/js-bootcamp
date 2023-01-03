import React, {useState} from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="App">
    <h1>Counter App using States</h1>
    <h2>The current state is {count}</h2>
    <button onClick={() => setCount(0)}>Reset Counter</button>
    <button onClick={() => setCount(count + 1)}>Increase Counter</button>
    <button onClick={() => count < 1 ? "" : setCount(count-1) }>Decrease Counter</button>
  </div>
  );
};

export default App;