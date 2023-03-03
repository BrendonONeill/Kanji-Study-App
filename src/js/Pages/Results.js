import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function Results({ finished, score }) {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE]  flex flex-col", children: [_jsx(Header, {}), finished ?
                        _jsx(_Fragment, { children: _jsx("div", { className: "mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]", children: _jsxs("h2", { children: [score, "%"] }) }) }) : null, _jsx("p", { className: ' mx-auto', children: "Temporary Reset button until sorted out bugs." }), _jsx("a", { className: ' p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2', href: "https://kanji-study.onrender.com/", children: "Try Again" })] }), _jsx(Footer, {})] }));
}
export default Results;
