import { useContext } from 'react';
import Card from '../Card/Card'
import { GameContext } from '../../context/GameContextProvider';
import Modal from '../Modal/Modal';
import Loading from '../Loading/Loading';

const Board = () => {
    const { cards, newGame }=useContext(GameContext);
    const handleNewGame = ()=>{
        newGame()
    }

    return ( 
        <section className='h-full'>
            <div className="h-full container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] py-10">
                <div className='capitalize pb-12 flex flex-col justify-center items-center gap-y-2'>
                    <h1 className="text-center text-5xl text-purple-500">memory game</h1>
                    <p className='text-xl lowercase text-center text-purple-400'>Test your memory with this exciting game</p> 
                    {cards.length > 0 ? 
                        (
                            <div className='flex items-center justify-center mt-12'>
                            <button onClick={handleNewGame} type="button" className="inline-flex w-full justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto">New game</button>
                            </div>
                        ):null
                    }
                   
                </div>
                
                {cards.length>0 ? (
                    <ul  className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-items-center gap-2 lg:gap-3">
                        {cards.map((card) => (
                        <Card key={card.uuid} card={card} />
                        ))} 
                    </ul>  
                ):
                (<Loading/>)
                }
            </div> 
            <Modal/>
        </section>
        
     );
}
 
export default Board;