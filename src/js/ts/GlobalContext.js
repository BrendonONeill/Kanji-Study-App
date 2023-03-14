import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const GlobalContext = createContext(null);
export function GlobalProvider({ children }) {
    const [data, setData] = useState([]);
    const [gameCards, setGameCards] = useState([]);
    const [score, setScore] = useState(0);
    const [cardsAmount, setCardsAmount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [number, setNumber] = useState(1);
    const [maxNumber, setMaxNumber] = useState(0);
    const [green, setGreen] = useState([]);
    const [grey, setGrey] = useState([]);
    const [red, setRed] = useState([]);
    const [theme, setTheme] = useState("light");
    return (_jsx(GlobalContext.Provider, { value: { data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, green, setGreen, grey, setGrey, red, setRed, theme, setTheme }, children: children }));
}
export default GlobalContext;
