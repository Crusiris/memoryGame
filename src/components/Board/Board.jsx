import { useContext } from 'react';
import Card from '../Card/Card'
import { GameContext } from '../../context/GameContextProvider';
import Modal from '../Modal/Modal';

const Board = () => {
    const { cards }=useContext(GameContext);
    return ( 
        <section className='bg-gradient-to-t from-purple-100'>
            <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] py-10 h-screen ">
                <div className='capitalize pb-12 flex flex-col justify-center items-center gap-y-2'>
                    <h1 class="text-center text-5xl text-purple-500">memory game</h1>
                    <p className='text-xl lowercase text-center text-purple-400'>Test your memory with this exciting game</p> 
                </div>
                <ul  class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-items-center gap-2 lg:gap-3">
                    {cards.map((card) => (
                    <Card key={card.uuid} card={card} />
                    ))} 
                </ul> 
            </div>
            <Modal/>
        </section>
        
     );
}
 
export default Board;