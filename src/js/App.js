import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import CardsSelection from "./CardsSelection";
import CollectionOfCards from "./CollectionOfCards";
import Footer from "./Footer";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Kanji from "./Kanji";
const App = () => {
    const [data, setData] = useState([]);
    const [gameCards, setGameCards] = useState([]);
    const [score, setScore] = useState(0);
    const [cardsAmount, setCardsAmount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [number, setNumber] = useState(1);
    const maxCards = 10; // need to sort
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
    const random = (e, kanji, number, pickedNumbers) => {
        debugger;
        e.preventDefault();
        if (number > maxCards)
            number = maxCards;
        setGameCards([]);
        let collectionOfCards = [];
        for (let s = 0; s < pickedNumbers.length; s++) {
            let test = kanji[0][pickedNumbers[s]];
            collectionOfCards.push(test);
        }
        let sortKanji = collectionOfCards.flat(Infinity);
        let sortedCards = [];
        setCardsAmount(number * 2);
        for (let i = 0; i < number; i++) {
            let sortSize = sortKanji.length;
            let pick = Math.floor(Math.random() * sortSize);
            console.log(pick + ": This is your pick");
            sortedCards.push(sortKanji[pick]);
            sortKanji.splice(pick, 1);
        }
        setGameCards(gameCards => [...gameCards, ...sortedCards]);
    };
    const calculatedScore = () => {
        setScore(Math.round((score / cardsAmount) * 100));
        console.log(score);
        setFinished(true);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[100vh] w-[1600px] m-auto bg-[#FFF5EE]  flex flex-col", children: [_jsx(Header, {}), _jsx(InfoCard, {}), _jsx(CardsSelection, { num: setNumber, random: random, data: data, number: number }), _jsx("div", { className: " w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start", children: gameCards.length !== 0 ?
                            _jsxs(_Fragment, { children: [_jsx(Kanji, { kanji: gameCards, setScore: setScore }), " "] }) : null }), gameCards.length !== 0 ?
                        _jsx("button", { className: " p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2", onClick: () => calculatedScore(), children: "Finished" }) : null, finished ?
                        _jsx(_Fragment, { children: _jsx("div", { className: "mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]", children: _jsxs("h2", { children: [score, "%"] }) }) }) : null, data.length !== 0 ?
                        _jsx(_Fragment, { children: _jsx(CollectionOfCards, { data: data }) }) : null] }), _jsx(Footer, {})] }));
};
const container = document.getElementById("root");
console.log(container);
if (container !== null) {
    const root = createRoot(container);
    root.render(_jsx(App, {}));
}
