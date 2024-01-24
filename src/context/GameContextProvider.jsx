
import { createContext, useState, useEffect} from "react";
import axios from "axios";

export const GameContext = createContext();
const GameProvider = GameContext.Provider; 

const GameContextProvider = ({children}) => {

    const [cards, setCards] = useState([]);
    const [flip, setFlip] = useState([]);
    const [movements, setMovements] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [gameOver, setGameover] = useState(false);

    const getData = async ()=>{
        const url = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';
        try {
            const { data } = await axios.get(url); 
            return data
        } catch (error) {
            console.log(error);
        } 
    }

    const shufflerCards = (cardsArray) =>{ 
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
        return cardsArray;  
    }

    const createBoard = async ()=>{
        try {  
          const { entries } = await getData();  
          const images = entries.map(({ fields: { image: { url, uuid, title } } }) => {
            return { url, uuid, title };
          }); 
    
          const duplicateCards = images.flatMap((image,i)=>{   
            const duplicate = {
                ...image,
                uuid:image.uuid + images.length,
            }
            return [image,duplicate]
          });  
            
          const cards = duplicateCards.map((card)=>{
            return{
                ...card,
                flippe:false,
                matched:false,
            }
          }); 

          const newCards = shufflerCards(cards); 

          setTimeout(() => {
            setCards(newCards); 
          }, 3000);

        } catch (error) {
            console.log(error);
        } 
    }
    
    const flipCards = id =>{

        if(isDisabled){
            return
        }

        const [currentCard] = cards.filter(card => card.uuid === id);

        if (!currentCard.flippe && !currentCard.matched) {

            currentCard.flippe = true;

            const newFlippedCards = [...flip, currentCard];
			setFlip(newFlippedCards);

            if(newFlippedCards.length === 2){
                setIsDisabled(true);
				const [firstCard, secondCard] = newFlippedCards;

                if (firstCard.url === secondCard.url) {
					firstCard.matched = true;
					secondCard.matched = true;
					setIsDisabled(false);
				} else {
					setTimeout(() => {
						firstCard.flippe = false;
						secondCard.flippe = false;
						setCards(cards);
						setIsDisabled(false);
					}, 1000);
				}

                setFlip([]);
				setMovements(movements + 1);
            }

            setCards(cards);
        }

        if (!cards.some(card => !card.matched)) {
            setGameover(true);
            setIsDisabled(true);
        }
    }
    
    useEffect(() => {
        createBoard();
    }, []);

    const newGame = ()=>{
        setCards([]);   
        createBoard();
        setMovements(0);
        setGameover(false);
        setIsDisabled(false);
    }

    return (
        <GameProvider 
        value={{
            cards,
            movements,
            gameOver,
            flipCards,
            newGame,
            setGameover,
        }}>
            {children}
        </GameProvider>
    );
}

export default GameContextProvider;