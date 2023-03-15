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
    return (_jsxs("nav", { className: ' p-[1rem] text-center bg-[#0096C7] dark:bg-[#5A189A] text-[#fff] rounded-b-md flex', "data-id": `nav-${GlobalItems?.theme}`, children: [_jsx("div", { className: 'basis-[70%] sm:basis-[85%] md:basis-[95%] flex items-center', children: _jsx("h1", { className: ' font-bold text-[1rem] flex items-center', children: _jsx("a", { href: "https://kanji-study.onrender.com/", children: "Kanji APP" }) }) }), _jsxs("div", { className: "flex justify-center min-h-[60px] basis-[30%] sm:basis-[20%] md:basis-[10%]   items-center gap-2", children: [_jsx("div", { children: _jsx("img", { className: " w-[30px] h-[30px]", src: `images/${GlobalItems?.theme}.svg`, alt: "" }) }), _jsx("button", { className: " bg-[white] dark:bg-black w-[40px] h-[23px] rounded-[25px] switcher-bg", onClick: changeTheme, id: GlobalItems?.theme, children: _jsx("div", { className: " rounded-[50%] w-[23px] h-[23px] switcher", id: `div-${GlobalItems?.theme}` }) })] })] }));
}
export default Header;
