import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
function NotFound() {
    const navigate = useNavigate();
    const returnHome = () => {
        navigate(`/`);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: " min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col", children: [_jsx(Header, {}), _jsxs("div", { className: " w-[100%] p-[1rem] mx-auto", children: [_jsx("img", { className: "rounded-[10px]", src: "../images/404.jpg", alt: "" }), _jsx("a", { className: "text-black dark:text-white", href: "https://www.freepik.com/free-vector/404-error-with-portals-concept-illustration_20602754.htm#query=404%20page&position=31&from_view=keyword&track=ais", children: "Image by storyset" }), _jsx("div", { className: "w-[100%] h-[100px] flex justify-center items-center", children: _jsx("button", { className: " bg-[#FF7900] p-[1rem] text-black rounded-[10px] m-auto font-bold", onClick: returnHome, children: "Return" }) })] })] }), _jsx(Footer, {})] }));
}
export default NotFound;
