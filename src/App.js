import './App.css';
import './ButtonGame/ButtonGameManager'
import ButtonGameManager from './ButtonGame/ButtonGameManager';
import React from 'react'

function App() {
  return (
    <div>
      <ButtonGameManager rows="4" tableX="8" tableY="8" timerSeconds="30"/>
    </div>
  );
}

export default App;
