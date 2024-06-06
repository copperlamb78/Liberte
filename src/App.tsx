import { ThemeProvider } from "styled-components";
import { defaultTheme, lightModeColors } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { useContext } from "react";
import { ThemeModeContext } from "./context/theme_context";

export function App() {
  const { themeMode } = useContext(ThemeModeContext)

  return (

      <ThemeProvider theme={themeMode === defaultTheme ? defaultTheme : lightModeColors}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>

  )
}

