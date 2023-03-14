import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
function ResultCards({ card, style, text }) {
    const GlobalItems = useContext(GlobalContext);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: " my-[1rem]", children: [_jsxs("p", { className: " p-[1rem] bg-[#0096C7] rounded-md text-[white] font-bold text-[1.4rem]", children: ["(", card.length, "/", GlobalItems?.cardsAmount / 2, ") ", text, " "] }), card.map((c) => (_jsxs("div", { className: "m-[1rem] font-bold p-[2rem] bg-white rounded-[10px] max-w-[300px] sm:basis-[45%] lg:basis-[24%]", style: style, children: [_jsx("p", { className: "p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ", children: c.kanji }), _jsxs("p", { children: ["Meaning: ", c.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", c.romaji] }), _jsxs("p", { children: ["On\u2019yomi: ", c.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", c.kunyomi[0]] })] })))] }) }));
}
export default ResultCards;
