
import { createContext, useState } from "react"
import { GameContext, KanjiCard, Data } from "./Lib/types";

const GlobalContext = createContext<null | GameContext>(null)

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Data>(null);
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
  const [typeOfDeck, setTypeOfDeck] = useState("kanji")
  const [hiraganaLetter, setHiraganaLetter] = useState(["あ", "か", "さ", "た", "な"])
  const [katakanaLetter, setKatakanaLetter] = useState(["ア", "カ", "サ", "タ", "ナ"])




  return (
    <GlobalContext.Provider
      value={{ data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, green, setGreen, grey, setGrey, red, setRed, theme, setTheme, decks, setDecks, typeOfDeck, setTypeOfDeck, hiraganaLetter, setHiraganaLetter, katakanaLetter, setKatakanaLetter }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;