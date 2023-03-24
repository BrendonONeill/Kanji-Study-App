import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Kanji from "../Components/Kanji";
import GlobalContext from "../GlobalContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
function Game() {
    const GlobalItems = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (GlobalItems?.gameCards.length === 0) {
            navigate(`/`);
        }
    }, []);
    const calculatedScore = () => {
        const tempRed = [];
        GlobalItems?.gameCards.forEach((card) => {
            const test1 = GlobalItems?.green.find((compareCard) => compareCard.id === card.id);
            const test2 = GlobalItems?.grey.find((compareCard) => compareCard.id === card.id);
            if (test1 === undefined && test2 === undefined) {
                tempRed.push(card);
            }
        });
        GlobalItems?.setRed(prev => [...prev, ...tempRed]);
        GlobalItems?.setScore(Math.round((GlobalItems.score / GlobalItems.cardsAmount) * 100));
        console.log(GlobalItems?.score);
        GlobalItems?.setFinished(true);
        navigate(`/results`);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col pb-6", children: [_jsx(Header, {}), _jsx("div", { className: " w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start", children: GlobalItems?.gameCards.length !== 0 ?
                            _jsx(_Fragment, { children: _jsx(Kanji, {}) }) : null }), GlobalItems?.gameCards.length !== 0 ?
                        _jsx("button", { "aria-label": "finished the game", className: " p-[1rem] bg-[#FF7900] hover:bg-[#b35500] text-black rounded-[10px] font-bold cursor-pointer max-w-[40%] mx-auto mt-2", onClick: () => calculatedScore(), children: "Finished" }) : null] }), _jsx(Footer, {})] }));
}
export default Game;
