import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";
import Results from "./Results";
import { useState, useEffect } from "react";
function Pages() {
    const [data, setData] = useState([]);
    const [gameCards, setGameCards] = useState([]);
    const [score, setScore] = useState(0);
    const [cardsAmount, setCardsAmount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [number, setNumber] = useState(1);
    const [maxNumber, setMaxNumber] = useState(0);
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/63f62220c0e7653a057c7913", {
            headers: {
                'X-Access-Key': `${import.meta.env.VITE_JSON_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(data => setData(data.record))
            .catch(error => console.log(error));
    }, []);
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, { data: data, maxNumber: maxNumber, setGameCards: setGameCards, setCardsAmount: setCardsAmount, number: number, setNumber: setNumber, setMaxNumber: setMaxNumber, gameCards: gameCards }) }), _jsx(Route, { path: "/game", element: _jsx(Game, { setScore: setScore, setFinished: setFinished, cardsAmount: cardsAmount, gameCards: gameCards, score: score }) }), _jsx(Route, { path: "/results", element: _jsx(Results, { score: score, finished: finished }) })] }) }));
}
export default Pages;
