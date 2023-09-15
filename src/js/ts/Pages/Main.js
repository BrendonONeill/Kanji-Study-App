import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CardsSelection from "../Components/CardsSelection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import { useNavigate } from "react-router-dom";
function Main() {
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col", children: [_jsx(Header, {}), _jsx(InfoCard, {}), _jsx("div", { className: " p-[2rem]", children: _jsx("button", { "aria-label": "preview decks", className: " p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[5px] text-[#000] font-bold", onClick: () => navigate(`/cards`), children: "Preview Decks" }) }), _jsx(CardsSelection, {})] }), _jsx(Footer, {})] }));
}
export default Main;
