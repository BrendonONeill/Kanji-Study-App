import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
const App = () => {
    return (_jsx(_Fragment, { children: _jsx(Router, { children: _jsx(Pages, {}) }) }));
};
const container = document.getElementById("root");
console.log(container);
if (container !== null) {
    const root = createRoot(container);
    root.render(_jsx(App, {}));
}
