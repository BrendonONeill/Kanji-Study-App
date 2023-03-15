import { createContext, useState } from "react"

type GameContext = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext< null | GameContext >(null)

export function ThemeProvider({ children }:{children :React.ReactNode}) {
    
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider
          value={{theme, setTheme}}>
          {children}
        </ThemeContext.Provider>
      );
}

export default ThemeContext;