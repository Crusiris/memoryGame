import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContextProvider'

const Card = ({card}) => {
  const { title, url,uuid, flippe} = card
const {flipCards} = useContext(GameContext)

  const handleCard = (id)=>{ 
    flipCards(id)
  }
   
  return (
    
<div className={`drop-shadow-md flex items-center ${flippe ? '[transform: rotateY(10deg)]' : 'bg-white'} justify-center cursor-pointer h-24 w-24 lg:h-32 lg:w-32 overflow-hidden hover:scale-105 rounded-xl transition-all duration-1000`}
    onClick={()=>handleCard(uuid)}>
    <div>
        <img src={url} alt={title}
            className={`h-24 w-24 lg:h-32 lg:w-32 scale-110 object-cover ${!flippe
                    ? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000'
                    : ''
            }`}
        />
    </div>
</div>)
}

export default Card
