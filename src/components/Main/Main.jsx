import React, { useContext } from 'react'
import Board from '../Board/Board'
import ServerError from '../ServerError.jsx/ServerError'
import { GameContext } from '../../context/GameContextProvider'

const Main = () => {
  const {error}= useContext(GameContext)
  return (
    <>
        {error ? 
            <ServerError/>
            : 
            ( 
            <Board/>
            )
        }
    </>
  )
}

export default Main
