
import { createContext, useState } from "react"
import { KanjiCard } from "./Lib/types";


type GameContext = {
  data: KanjiCard[];
  setData: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
  gameCards: KanjiCard[];
  setGameCards: React.Dispatch<React.SetStateAction<KanjiCard[]>>
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
  green: KanjiCard[];
  setGreen: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
  grey: KanjiCard[];
  setGrey: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
  red: KanjiCard[];
  setRed: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
  decks: number[];
  setDecks: React.Dispatch<React.SetStateAction<number[]>>
}


const GlobalContext = createContext<null | GameContext>(null)


export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<KanjiCard[]>([]);
  const [gameCards, setGameCards] = useState<KanjiCard[]>([]);
  const [score, setScore] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [number, setNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(0);
  const [green, setGreen] = useState<KanjiCard[]>([]);
  const [grey, setGrey] = useState<KanjiCard[]>([]);
  const [red, setRed] = useState<KanjiCard[]>([]);
  const [theme, setTheme] = useState("light")
  const [decks, setDecks] = useState<number[]>([1, 2, 3, 4])

  return (
    <GlobalContext.Provider
      value={{ data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, green, setGreen, grey, setGrey, red, setRed, theme, setTheme, decks, setDecks }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;