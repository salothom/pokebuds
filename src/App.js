import logo from './logo.svg';
import './App.css';
import Powers from './pokePowers';
import Pokemon from './pokemon';
import React, { useState } from 'react'
function App() {

  const [displayPowers, setPowers] = useState(true)

  function swapShow() {
    setPowers(!displayPowers)
    console.log(displayPowers)

  }

  return (
    <div className="App">
      <h1>POKE POWERS</h1>
      {displayPowers && <Powers />}
      {!displayPowers && <Pokemon />}
      <div className="footer">
        <button className="button boxShadow" onClick={swapShow}>Swap Views

        </button>

      </div>

    </div>
  );
}

export default App;
