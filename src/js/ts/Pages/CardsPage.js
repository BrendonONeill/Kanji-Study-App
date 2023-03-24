import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CollectionOfCards from "../Components/CollectionOfCards";
import GlobalContext from "../GlobalContext";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function CardsPage() {
    const GlobalItems = useContext(GlobalContext);
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col", children: [_jsx(Header, {}), _jsx("div", { className: "p-[2rem] pb-0", children: _jsx("button", { "aria-label": "return to main page", className: "p-[1.5rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[10px] text-[#000] font-bold", onClick: () => navigate(`/`), children: "Home Page" }) }), GlobalItems?.data.length !== 0 ?
                        _jsx(_Fragment, { children: _jsx(CollectionOfCards, {}) }) : null] }), _jsx(Footer, {})] }));
}
export default CardsPage;
