import { Header } from "../../components/Header";
import { CartazLiberte, HomeContainer, SocialLinks } from "./styles";
import cartazImg from "../../assets/cartaz_tiocat.jpg"
import { DiscordLogo, InstagramLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";

export function Home() {
    return(
        <HomeContainer>
            <Header />
            <div>
                <CartazLiberte src={cartazImg}  alt=""/>                
            </div>
            <SocialLinks href="https://discord.gg/vwZxhmfJWv" target="blank">
                <DiscordLogo size={64}/>
            </SocialLinks>
            <SocialLinks href="#" target="blank">
                <InstagramLogo size={64}/>
            </SocialLinks>
            <SocialLinks href="#" target="blank">
                <TiktokLogo size={64}/>
            </SocialLinks>
            
        </HomeContainer>
    )
}