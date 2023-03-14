import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
function Header() {
    const GlobalItems = useContext(GlobalContext);
    const changeTheme = () => {
        if (GlobalItems?.theme === "light") {
            GlobalItems?.setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            GlobalItems?.setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };
    return (_jsxs("div", { className: ' p-[1rem] text-center bg-[#0096C7] dark:bg-black text-[#fff] rounded-b-md flex', "data-id": `nav-${GlobalItems?.theme}`, children: [_jsx("div", { className: 'basis-[70%] sm:basis-[85%] md:basis-[95%] flex items-center', children: _jsx("h1", { className: ' font-bold text-[1rem] flex items-center', children: _jsx("a", { href: "https://kanji-study.onrender.com/", children: "Kanji APP" }) }) }), _jsx("div", { className: 'p-[0.2rem] basis-[30%] sm:basis-[15%]  md::basis-[5%] h-full', children: _jsxs("ul", { className: 'flex list-none', children: [_jsx("li", { className: 'basis-[50%] p-2', children: _jsx("a", { href: "https://github.com/BrendonONeill/Kanji-Study-App", target: "_blank", children: _jsx("img", { width: "30px", height: "30px", src: "../images/github.svg", alt: "" }) }) }), _jsxs("li", { className: 'basis-[50%] p-2', children: [" ", _jsx("a", { href: "https://brendononeill.github.io/Portfolio-Revamp/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { width: "30px", height: "30px", src: "../images/folder.svg", alt: "" }) })] })] }) }), _jsx("div", { className: "flex justify-center items-center", children: _jsx("button", { className: " bg-[white] w-[40px] h-[23px] rounded-[25px] switcher-bg", onClick: changeTheme, id: GlobalItems?.theme, children: _jsx("div", { className: " rounded-[50%] w-[20px] h-[20px] switcher", id: `div-${GlobalItems?.theme}` }) }) })] }));
}
export default Header;
