import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
function ResultCards({ card, style, text }) {
    const GlobalItems = useContext(GlobalContext);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: " my-[1rem]", children: [_jsxs("p", { className: " p-[1rem] bg-[#0096C7] dark:bg-[#5A189A] rounded-md text-[white] font-bold text-[1.4rem]", children: ["(", card.length, "/", GlobalItems?.cardsAmount / 2, ") ", text, " "] }), _jsx("div", { className: "flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] justify-start", children: card.map((c) => (_jsxs("div", { className: " font-bold  border-[3px] border-[#0096C7] dark:border-[#0bb744] p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] sm:basis-[80%] lg:basis-[24%] gap-3", children: [_jsx("p", { className: "mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md w-[80%] text-center ", children: c.kanji }), _jsxs("p", { children: ["Meaning: ", c.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", c.romaji] }), _jsxs("p", { children: ["On\u2019yomi: ", c.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", c.kunyomi[0]] })] }, c.id))) })] }) }));
}
export default ResultCards;
