
import { createContext, useState } from "react"
import { GameContext, KanjiCard } from "./Lib/types";

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