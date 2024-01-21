
import { createContext, useState } from "react";
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
   

    return (
        <GameProvider value={{}}>
            {children}
        </GameProvider>
    );
}

export default GameContextProvider;