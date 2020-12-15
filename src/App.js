import React from 'react';
import './App.css';
import Shuffle from './function';



function App() {
  return (
    <>
      <h1>Easy Slot Machine</h1>
      <div className="slotMachine">
        <div className="slotDisplay">
          <input id="row1" type="text" value="🍎" disabled />
          <input id="row2" type="text" value="🍌" disabled />
          <input id="row3" type="text" value="🍊" disabled />
        </div>
        <div className="shuffle">
          <button id="shuffle" onClick={Shuffle}>SHUFFLE</button>
        </div>
        <div className="history">
          <textarea id="lastOutput" disabled></textarea>
        </div>
        <div className="congo true" id="congo">
          <textarea disabled> Congratulations!! You Won the Jackpot. </textarea>
        </div>
      </div>

    </>
  );
}

export default App;
