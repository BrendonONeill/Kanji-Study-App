import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CardsSelection from "../Components/CardsSelection";
import CollectionOfCards from "../Components/CollectionOfCards";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
function Main() {
    const GlobalItems = useContext(GlobalContext);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE]  flex flex-col", children: [_jsx(Header, {}), _jsx(InfoCard, {}), _jsx(CardsSelection, {}), GlobalItems?.data.length !== 0 ?
                        _jsx(_Fragment, { children: _jsx(CollectionOfCards, {}) }) : null] }), _jsx(Footer, {})] }));
}
export default Main;
