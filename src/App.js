import './App.css';
import './ButtonGame/ButtonGameManager'
import ButtonGameManager from './ButtonGame/ButtonGameManager';
import React from 'react'

function App() {
  return (
    <div>
      <ButtonGameManager tableX="8" tableY="8" timerSeconds="40" timeScoreZero={false}/>
    </div>
  );
}

export default App;
