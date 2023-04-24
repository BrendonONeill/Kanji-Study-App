import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";
import Results from "./Results";
import { useEffect } from "react";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import NotFound from "./NotFound";
import CardsPage from "./CardsPage";
function Pages() {
    const GlobalItems = useContext(GlobalContext);
    if (GlobalItems?.data.length === 0) {
        useEffect(() => {
            fetch(`https://concerned-shirt-dog.cyclic.app/kanji/`)
                .then(response => response.json())
                .then(data => GlobalItems?.setData(data.record))
                .catch(error => console.log(error));
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                GlobalItems.setTheme("dark");
            }
            else {
                GlobalItems.setTheme("light");
            }
        }, []);
    }
    return (_jsx("div", { className: GlobalItems?.theme, children: _jsx("section", { className: "w-full bg-[#CAF0F8] dark:bg-[#1C1C21]", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: "/game", element: _jsx(Game, {}) }), _jsx(Route, { path: "/results", element: _jsx(Results, {}) }), _jsx(Route, { path: "/cards", element: _jsx(CardsPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
export default Pages;
