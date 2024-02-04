import './index.css'
import GameContextProvider from './context/GameContextProvider'; 
import Main from './components/Main/Main';
function App() { 

  return (
    <GameContextProvider>
      <Main/>
    </GameContextProvider>
  )
}

export default App
