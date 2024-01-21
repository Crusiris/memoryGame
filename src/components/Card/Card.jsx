import React from 'react'

const Card = ({card}) => {
  const { title, url } = card
  return (
    <li class="relative group h-24 lg:h-48     flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden cursor-pointer"> 
        <img className='object-cover bg-top h-full w-full ' src={url} alt={title} />
    </li>
  )
}

export default Card
