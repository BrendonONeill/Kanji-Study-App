import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function CollectionOfCards({ data }) {
    return (_jsxs("div", { className: " bg-blue-300 w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]", children: [_jsxs("div", { className: "flex gap-3", children: [_jsx("h2", { children: "Deck 1" }), data[0][1].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white rounded-[10px] w-[200px] h-[150px] ", children: [_jsx("p", { children: d.kanji }), _jsxs("p", { children: ["Reading: ", d.reading] }), _jsxs("p", { children: ["English: ", d.english] })] })))] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("h2", { children: "Deck 2" }), data[0][2].map((d) => (_jsxs("div", { className: " font-bold p-[2rem] bg-white rounded-[10px] w-[200px] h-[150px] ", children: [_jsx("p", { children: d.kanji }), _jsxs("p", { children: ["Reading: ", d.reading] }), _jsxs("p", { children: ["English: ", d.english] })] })))] })] }));
}
export default CollectionOfCards;
