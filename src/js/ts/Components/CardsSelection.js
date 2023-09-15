import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { checkCardAmount, collectingCardsForGame, randomCardSelection } from "../Lib/startGame";
function CardsSelection() {
    const navigate = useNavigate();
    const GlobalItems = useContext(GlobalContext);
    let [pickedNumbers, setPickedNumbers] = useState([]);
    useEffect(() => {
        if (GlobalItems?.gameCards.length !== 0) {
            navigate(`/game`);
        }
    }, [GlobalItems?.gameCards]);
    const random = (e, pickedNumbers) => {
        e.preventDefault();
        if (GlobalItems !== null) {
            let cardsNumber = checkCardAmount(GlobalItems.number, GlobalItems.maxNumber);
            let collectionOfCards = collectingCardsForGame(GlobalItems.data, pickedNumbers);
            collectionOfCards = collectionOfCards.flat(Infinity);
            GlobalItems.setCardsAmount(cardsNumber * 2);
            let sortedCards = randomCardSelection(collectionOfCards, cardsNumber);
            GlobalItems?.setGameCards([...sortedCards]);
        }
    };
    const addCardsToDeck = (e) => {
        let eventValue = e.target.value;
        if (e.target.classList.contains(`button-clicked-${GlobalItems?.theme}`)) {
            e.target.classList.remove(`button-clicked-${GlobalItems?.theme}`);
            setPickedNumbers(prev => (prev.filter(p => p !== Number(e.target.value))));
            GlobalItems?.setMaxNumber(prev => prev - GlobalItems.data[0][eventValue].length);
        }
        else {
            e.target.classList.add(`button-clicked-${GlobalItems?.theme}`);
            setPickedNumbers(prev => [...prev, Number(e.target.value)]);
            GlobalItems?.setMaxNumber(prev => prev + GlobalItems.data[0][eventValue].length);
        }
    };
    if (GlobalItems?.data !== null) {
        return (_jsxs("div", { className: " pb-[5rem]", children: [_jsx("div", { className: " p-[2rem] flex gap-[1rem] justify-center", children: GlobalItems?.decks.map((x, index) => (_jsx("button", { value: x, className: "p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold", onClick: (event) => addCardsToDeck(event), children: x }, index))) }), _jsxs("form", { className: "max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center items-center", onSubmit: (e) => random(e, pickedNumbers), children: [_jsx("input", { className: " border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]", type: "number", id: "number", placeholder: "1", min: 1, onChange: (e) => GlobalItems?.setNumber(Number(e.target.value)) }), _jsxs("p", { className: " p-[1rem] dark:text-white", children: ["(Max ", GlobalItems?.maxNumber, ")"] }), GlobalItems?.maxNumber !== 0 ?
                            _jsx("button", { type: "submit", className: " p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] text-[#000] font-bold rounded-[5px] cursor-pointer ", children: "Start Game" }) : null] })] }));
    }
    else {
        return (_jsx("h1", { children: "Loading" }));
    }
}
export default CardsSelection;
