import { ResultType } from "@remix-run/router/dist/utils";
import { createContext, useState } from "react"



type GameContext = {
    data: object[];
    setData: React.Dispatch<React.SetStateAction<object[]>>;
    gameCards: object[]; 
    setGameCards: React.Dispatch<React.SetStateAction<object[]>>
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
    cardsAmount: number;
    setCardsAmount: React.Dispatch<React.SetStateAction<number>>
    finished: boolean;
    setFinished: React.Dispatch<React.SetStateAction<boolean>>;
    number: number;
    setNumber: React.Dispatch<React.SetStateAction<number>>
    maxNumber: number;
    setMaxNumber: React.Dispatch<React.SetStateAction<number>>
    resultCards: object[][] 
    setResultCards: React.Dispatch<React.SetStateAction<object[][]>>
    
}

const GlobalContext = createContext< null | GameContext >(null)


export function GlobalProvider({ children }:{children :React.ReactNode}) {
    const [data, setData] = useState<object[]>([]);
    const [gameCards, setGameCards] = useState<object[]>([]);
    const [score, setScore] = useState(0);
    const [cardsAmount, setCardsAmount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [number, setNumber] = useState(1);
    const [maxNumber, setMaxNumber] = useState(0);
    const [resultCards, setResultCards] = useState<object[][]>([]);

    return (
        <GlobalContext.Provider
          value={{ data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, resultCards, setResultCards}}>
          {children}
        </GlobalContext.Provider>
      );
}

export default GlobalContext;