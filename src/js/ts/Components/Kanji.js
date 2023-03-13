import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
const Kanji = () => {
    const GlobalItems = useContext(GlobalContext);
    const handleKeyPress = (event, index) => {
        if (event.code === "Enter") {
            debugger;
            let inputWord = event.target.value.trim();
            if (inputWord.toLowerCase() === GlobalItems?.gameCards[index]?.romaji || GlobalItems?.gameCards[index].onyomi.includes(inputWord) || GlobalItems?.gameCards[index].kunyomi.includes(inputWord)) {
                if (event.target.parentElement.style.backgroundColor === "rgb(138, 1, 1)") {
                    GlobalItems?.setScore((prev) => prev + 1);
                    event.target.parentElement.style.backgroundColor = "#D4D4D4";
                }
                else {
                    GlobalItems?.setScore((prev) => prev + 2);
                    event.target.parentElement.style.backgroundColor = "#018A26";
                }
                event.target.style.color = "#636363";
                event.target.style.backgroundColor = "#B0B0B0";
                event.target.disabled = true;
            }
            else {
                event.target.parentElement.style.backgroundColor = "#8A0101";
            }
        }
    };
    return GlobalItems?.gameCards.map((word, index) => (_jsx(_Fragment, { children: _jsxs("div", { className: " mb-3 w-[220px] h-[180px] rounded-xl flex flex-col bg-[#023E8A] p-4 text-center basis-[45%] sm:basis-[30%] lg:basis-[24%] xl:basis-[18%]", children: [_jsx("div", { className: " basis-[70%] mb-4 flex justify-center items-center bg-white rounded-md", children: _jsx("h1", { className: " w-full text-[1.5rem] font-bold", children: word.kanji }) }), _jsx("input", { className: " w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem] basis-[30%]", type: "text", onKeyDown: (e) => handleKeyPress(e, index) }, index)] }, index) })));
};
export default Kanji;
