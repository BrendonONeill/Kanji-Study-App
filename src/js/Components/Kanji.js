import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { handleKeyPress } from "./CardInput";
const Kanji = (items) => {
    return items.kanjiCards.map((word, index) => (_jsxs("div", { className: " mb-3 w-[220px] h-[180px] rounded-xl flex flex-col bg-[#023E8A] p-4 text-center basis-[45%] sm:basis-[30%] lg:basis-[24%] xl:basis-[18%]", children: [_jsx("div", { className: " basis-[70%] mb-4 flex justify-center items-center bg-white rounded-md", children: _jsx("h1", { className: " w-full text-[1.5rem] font-bold", children: word.kanji }) }), _jsx("input", { className: " w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem] basis-[30%]", type: "text", onKeyDown: (e) => handleKeyPress(e, index, items.kanjiCards, items.setScore) }, index)] }, index)));
};
export default Kanji;
