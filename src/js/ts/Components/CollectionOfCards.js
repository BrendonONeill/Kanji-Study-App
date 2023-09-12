import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
function CollectionOfCards() {
    const GlobalItems = useContext(GlobalContext);
    useEffect(() => {
        if (GlobalItems) {
            GlobalItems.setMaxNumber(0);
        }
    }, []);
    return (_jsxs("div", { className: " bg-blue-300 dark:bg-[#7B2CBF] w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]", children: [_jsxs("div", { children: [_jsx("h2", { className: "mx-auto w-[80%] sm:w-[50%] text-center font-bold text-[1.5rem] rounded-md bg-white dark:bg-[#0BB744]", children: "N5 Deck 1" }), _jsx("div", { className: "flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center", children: GlobalItems?.data[0][1].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%] ", children: [_jsx("p", { className: "mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md text-center w-[80%]", children: d.kanji }), _jsxs("p", { children: ["Meaning: ", d.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", d.romaji[0]] }), _jsxs("p", { children: ["On\u2019yomi: ", d.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", d.kunyomi[0]] })] }, d.id))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "mx-auto w-[80%] sm:w-[50%] text-center font-bold text-[1.5rem] rounded-md bg-white dark:bg-[#0BB744]", children: "N5 Deck 2" }), _jsx("div", { className: "flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center", children: GlobalItems?.data[0][2].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%]", children: [_jsx("p", { className: "mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md w-[80%] text-center ", children: d.kanji }), _jsxs("p", { children: ["Meaning: ", d.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", d.romaji[0]] }), _jsxs("p", { children: ["On\u2019yomi: ", d.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", d.kunyomi[0]] })] }, d.id))) })] })] }));
}
export default CollectionOfCards;
