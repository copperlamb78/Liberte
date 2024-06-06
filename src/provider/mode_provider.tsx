
import { useState } from "react";
import { ThemeModeContext } from "../context/theme_context";
import { defaultTheme, lightModeColors } from "../styles/themes/default";
import { DefaultTheme } from "styled-components/dist/types";


export const ThemeModeProvider = ({ children }: any) => {
    const [themeMode, setThemeMode] = useState<DefaultTheme>(defaultTheme)

    function toggleTheme() {setThemeMode(prevTheme => prevTheme === defaultTheme ? lightModeColors : defaultTheme);
    }

    return(
        <ThemeModeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeModeContext.Provider>
    )
}