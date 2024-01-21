import { useContext } from 'react';
import Card from '../Card/Card'
import { GameContext } from '../../context/GameContextProvider';

const Board = () => {
    const { cards }=useContext(GameContext);
    return ( 
        <section class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] py-10">
            <div className='capitalize pb-12 flex flex-col justify-center items-center gap-y-2'>
                 <h1 class="text-center text-5xl">memory game</h1>
                 <p className='text-xl lowercase'>Test your memory with this exciting game</p> 
            </div>
            <ul  class="grid grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
                {cards.map((card) => (
                <Card key={card.uuid} card={card} />
                ))} 
            </ul> 
        </section>
        
     );
}
 
export default Board;