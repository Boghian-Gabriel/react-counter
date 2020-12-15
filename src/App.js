import './App.css';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      This is a mini-project in React JS
      <header className="App-header">
        <h1>{counter}</h1>
        <div className="div-btn">
          <Button variant="outlined" color="primary" onClick={() => { setCounter(counter + 1) }}>
          Increase
          </Button>
          <Button variant="outlined" onClick={() => {  setCounter(counter * 0) }}>Reset</Button>
      
          <Button variant="outlined" color="secondary" onClick={() => {  setCounter(counter - 1) }}>
              Decrease
        </Button>
      </div>
      </header>
    </div>
  );
}

export default App;

