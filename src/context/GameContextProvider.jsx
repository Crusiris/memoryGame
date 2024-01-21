
import { createContext, useState, useEffect} from "react";
import axios from "axios";
export const GameContext = createContext();
const GameProvider = GameContext.Provider; 

const GameContextProvider = ({children}) => {

    const [cards, setCards] = useState([]);
    const [flip, setFlip] = useState([]);
    const [movements, setMovements] = useState(0);

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
        console.log(cardsArray) 
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
       
          setCards(newCards); 

        } catch (error) {
            console.log(error);
        } 
    }
    
    useEffect(() => {
        createBoard();
    }, []);

    return (
        <GameProvider value={{}}>
            {children}
        </GameProvider>
    );
}

export default GameContextProvider;