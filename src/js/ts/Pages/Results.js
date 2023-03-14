import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import ResultCards from "../Components/ResultCards";
function Results() {
    const GlobalItems = useContext(GlobalContext);
    const navigate = useNavigate();
    const reset = () => {
        GlobalItems?.setGameCards([]);
        GlobalItems?.setScore(0);
        GlobalItems?.setCardsAmount(0);
        GlobalItems?.setFinished(false);
        GlobalItems?.setNumber(1);
        GlobalItems?.setMaxNumber(0);
        GlobalItems?.setGreen([]);
        GlobalItems?.setGrey([]);
        GlobalItems?.setRed([]);
        navigate(`/`);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE]  flex flex-col", children: [_jsx(Header, {}), GlobalItems?.finished ?
                        _jsx(_Fragment, { children: _jsx("div", { className: "mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]", children: _jsxs("h2", { children: [GlobalItems?.score, "%"] }) }) }) : null, _jsx("button", { className: ' p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2', onClick: reset, children: "Home" }), GlobalItems?.green.length !== 0 ? _jsx(ResultCards, { card: GlobalItems?.green, text: "First time correct", style: { backgroundColor: '#018A26', color: 'white' } }) : null, GlobalItems?.grey.length !== 0 ? _jsx(ResultCards, { card: GlobalItems?.grey, text: "Review Again", style: { backgroundColor: '#D4D4D4' } }) : null, GlobalItems?.red.length !== 0 ? _jsx(ResultCards, { card: GlobalItems?.red, text: "Don't Know Cards", style: { backgroundColor: '#8A0101', color: 'white' } }) : null] }), _jsx(Footer, {})] }));
}
export default Results;
