import { useState } from 'react'
import './index.css'
import GameContextProvider from './context/GameContextProvider';
import Board from './components/Board/Board';
function App() { 

  return (
    <GameContextProvider>
      <Board/> 
    </GameContextProvider>
  )
}

export default App
