import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
const Kanji = () => {
    const GlobalItems = useContext(GlobalContext);
    const handleKeyPress = (event, index) => {
        let inputWord = event.target.value.trim();
        let test = inputWord.toLowerCase();
        if (GlobalItems?.gameCards[index].romaji.includes(test) || GlobalItems?.gameCards[index].onyomi.includes(test) || GlobalItems?.gameCards[index].kunyomi.includes(test)) {
            if (event.target.parentElement.classList.contains('wrong')) {
                GlobalItems?.setScore((prev) => prev + 1);
                event.target.parentElement.style.backgroundColor = "#495057";
                GlobalItems?.setGrey(prev => [...prev, ...[GlobalItems.gameCards[index]]]);
            }
            else {
                GlobalItems?.setScore((prev) => prev + 2);
                event.target.parentElement.style.backgroundColor = "#29bf12";
                GlobalItems?.setGreen(prev => [...prev, ...[GlobalItems.gameCards[index]]]);
            }
            event.target.style.color = "#636363";
            event.target.style.backgroundColor = "#B0B0B0";
            event.target.disabled = true;
        }
        else {
            event.target.parentElement.style.backgroundColor = "rgb(239,35,60)";
            event.target.parentElement.classList.add('wrong');
        }
    };
    debugger;
    return GlobalItems?.gameCards.map((word, index) => (_jsx(_Fragment, { children: _jsxs("div", { className: " mb-3 w-[220px] h-[180px] rounded-xl flex flex-col bg-[#4361ee] p-4 text-center basis-[45%] sm:basis-[30%] lg:basis-[24%] xl:basis-[18%]", children: [_jsx("div", { className: " basis-[70%] mb-4 flex justify-center items-center bg-white dark:bg-[#1C1C21] dark:text-white rounded-md", children: _jsx("h1", { className: " w-full text-[1.5rem] font-bold", children: word.kanji }) }), _jsx("input", { className: " w-full  bg-[#d6d6d6] hover:bg-[#bdbdbd] dark:bg-[#4C4D52] dark:hover:bg-[#333438] dark:text-white rounded-md text-center font-bold text-[1.4rem] basis-[30%]", type: "text", onBlur: (e) => handleKeyPress(e, index) }, index)] }, word.id) })));
};
export default Kanji;
