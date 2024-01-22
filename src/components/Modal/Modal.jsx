import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContextProvider'

function Modal() {
  const {gameOver, newGame, setGameover, movements}= useContext(GameContext);  

  const handleNewGame = ()=>{
    newGame()
  }

  const handleFinallyGame = ()=>{
    setGameover(false)
  }

  return (
    <div className={`${gameOver ? 'relative z-10' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>
    
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div >
                
                <div className="mt-3 text-center sm:ml-4 sm:mt-0  ">
                    <h3 className="text-4xl font-semibold leading-6 text-gray-800 text-center" id="modal-title">Won</h3>
                    <div className="mt-4">
                    <p className="text-sm text-gray-500">Congratulations, you have a great memory</p>
                    <p className="text-sm text-gray-500">tuviste {movements} movimientos</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={handleNewGame} type="button" className="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto">New game</button>
                <button onClick={handleFinallyGame} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">End game</button>
            </div>
            </div>
        </div>
        </div>
    </div> 
  )
}

export default Modal
