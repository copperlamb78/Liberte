import { DarkLightButton, HeaderContainer, HeaderContent } from "./styles";
import LogoImg from '../../assets/logo.jpg'
import { MoonStars, Sun } from "phosphor-react";
import { useContext } from "react";
import { ThemeModeContext } from "../../context/theme_context";
import { lightModeColors } from "../../styles/themes/default";

export function Header() {
    const { toggleTheme } = useContext(ThemeModeContext)
    const { themeMode } = useContext(ThemeModeContext)

    const IconComponent = themeMode === lightModeColors ? Sun : MoonStars;

    return(
        <HeaderContainer>
            <HeaderContent>
                <strong>LIBERTÉ☭ </strong>
                <img src={LogoImg} alt="" />
                <DarkLightButton onClick={toggleTheme}>
                    <IconComponent size={32}/>
                </DarkLightButton>
            </HeaderContent>
            
        </HeaderContainer>
        
    )
}