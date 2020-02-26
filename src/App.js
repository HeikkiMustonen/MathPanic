import './App.css';
import './ButtonGame/ButtonGameManager'
import ButtonGameManager from './ButtonGame/ButtonGameManager';
import React from 'react'

function App() {
  return (
   <ButtonGameManager rows="4" timerSeconds="20"/>
  );
}

export default App;
