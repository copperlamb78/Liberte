import { createContext } from "react";
import { defaultTheme } from "../styles/themes/default";

type ThemeTypeContext = {
    themeMode: object
    toggleTheme: () => void
}

export const ThemeModeContext = createContext<ThemeTypeContext>({themeMode: defaultTheme, toggleTheme: () => {}})