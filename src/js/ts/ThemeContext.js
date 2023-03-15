import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
}
export default ThemeContext;
