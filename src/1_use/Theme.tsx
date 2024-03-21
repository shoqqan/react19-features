import {Context, createContext, ReactNode, use, useState} from "react";
import {THEME} from "./models/THEME.ts";

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeContext: Context<any> = createContext(THEME.LIGHT)

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<THEME>(THEME.LIGHT)
    const themeToggler = () => {
        setTheme(prev => prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
    }
    return (
        <ThemeContext.Provider value={{theme, themeToggler}}>
            {children}
        </ThemeContext.Provider>
    );
};
const ThemeComponent = () => {
    const {theme, themeToggler} = use(ThemeContext)
    const cls = theme === THEME.DARK ? "themeContainer dark" : "themeContainer"
    return (
        <div className={cls}>
            <h3>BACKGROUND</h3>
            <button onClick={themeToggler}>change theme</button>
        </div>
    )
}

export const ThemeExample = () => {
    return (
        <ThemeProvider>
            <ThemeComponent/>
        </ThemeProvider>
    )
}
