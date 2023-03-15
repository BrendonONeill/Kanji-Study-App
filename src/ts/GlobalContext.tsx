
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
    green: object[];
    setGreen: React.Dispatch<React.SetStateAction<object[]>>;
    grey: object[];
    setGrey: React.Dispatch<React.SetStateAction<object[]>>;
    red: object[];
    setRed: React.Dispatch<React.SetStateAction<object[]>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
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
    const [green, setGreen] = useState<object[]>([]);
    const [grey, setGrey] = useState<object[]>([]);
    const [red, setRed] = useState<object[]>([]);
    const [theme, setTheme] = useState("light")

    return (
        <GlobalContext.Provider
          value={{ data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, green, setGreen, grey, setGrey, red, setRed, theme, setTheme}}>
          {children}
        </GlobalContext.Provider>
      );
}

export default GlobalContext;