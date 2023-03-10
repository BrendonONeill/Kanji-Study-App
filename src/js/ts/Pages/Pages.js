import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Game from "./Game";
import Results from "./Results";
import { useEffect } from "react";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
function Pages() {
    const GlobalItems = useContext(GlobalContext);
    if (GlobalItems?.data.length === 0) {
        useEffect(() => {
            fetch("https://api.jsonbin.io/v3/b/63f62220c0e7653a057c7913", {
                headers: {
                    'X-Access-Key': `${import.meta.env.VITE_JSON_API_KEY}`
                }
            })
                .then(response => response.json())
                .then(data => GlobalItems?.setData(data.record))
                .catch(error => console.log(error));
        }, []);
    }
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: "/game", element: _jsx(Game, {}) }), _jsx(Route, { path: "/results", element: _jsx(Results, {}) })] }) }));
}
export default Pages;
