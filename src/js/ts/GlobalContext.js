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
    const [resultCards, setResultCards] = useState([]);
    return (_jsx(GlobalContext.Provider, { value: { data, setData, gameCards, setGameCards, score, setScore, cardsAmount, setCardsAmount, finished, setFinished, number, setNumber, maxNumber, setMaxNumber, resultCards, setResultCards }, children: children }));
}
export default GlobalContext;
