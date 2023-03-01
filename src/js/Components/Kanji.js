import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { handleKeyPress } from "./CardInput";
const Kanji = (items) => {
    return items.kanjiCards.map((word, index) => (_jsxs("div", { className: " mb-3 w-[200px] h-[200px] rounded-xl grid bg-[#023E8A] p-4 text-center basis-[15%]", children: [_jsx("h1", { className: " w-full text-[3rem] font-bold bg-white mb-5 rounded-md p-4", children: word.kanji }), _jsx("input", { className: " w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem]", type: "text", onKeyDown: (e) => handleKeyPress(e, index, items.kanjiCards, items.setScore) }, index)] }, index)));
};
export default Kanji;
