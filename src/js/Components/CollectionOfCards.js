import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function CollectionOfCards({ data }) {
    return (_jsxs("div", { className: " bg-blue-300 w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]", children: [_jsxs("div", { children: [_jsx("h2", { className: "mx-auto w-[80%] sm:w-[20%] text-center font-bold text-[1.5rem] rounded-md bg-white", children: "Deck 1" }), _jsx("div", { className: "flex gap-3 flex-wrap flex-col sm:flex-row items-center p-[1rem]", children: data[0][1].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white rounded-[10px] w-[200px] sm:basis-[45%] lg:basis-[24%] ", children: [_jsx("p", { className: "p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ", children: d.kanji }), _jsxs("p", { children: ["Meaning: ", d.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", d.romaji] }), _jsxs("p", { children: ["On\u2019yomi: ", d.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", d.kunyomi[0]] })] }))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "mx-auto w-[80%] sm:w-[20%] text-center font-bold text-[1.5rem] rounded-md bg-white", children: "Deck 2" }), _jsx("div", { className: "flex gap-3 flex-wrap flex-col sm:flex-row items-center p-[1rem]", children: data[0][2].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white rounded-[10px] w-[200px] sm:basis-[45%] lg:basis-[24%]", children: [_jsx("p", { className: "p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ", children: d.kanji }), _jsxs("p", { children: ["Meaning: ", d.english, " "] }), _jsxs("p", { children: ["R\u014Dmaji: ", d.romaji] }), _jsxs("p", { children: ["On\u2019yomi: ", d.onyomi[0]] }), _jsxs("p", { children: ["Kun\u2019yomi: ", d.kunyomi[0]] })] }))) })] })] }));
}
export default CollectionOfCards;
