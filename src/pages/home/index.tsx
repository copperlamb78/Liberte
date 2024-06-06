import { Header } from "../../components/Header";
import { CartazLiberte, HomeContainer, SocialLinks } from "./styles";
import cartazImg from "../../assets/cartaz_tiocat.jpg"
import { DiscordLogo, InstagramLogo, TiktokLogo} from "phosphor-react";

export function Home() {
    return(
        <HomeContainer>
            <Header />
            <div>
                <CartazLiberte src={cartazImg}  alt=""/>                
            </div>
            <SocialLinks href="https://discord.gg/GBtjusud6Y" target="blank">
                <DiscordLogo size={64}/>
            </SocialLinks>
            <SocialLinks href="https://www.instagram.com/liberte_ofc1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank">
                <InstagramLogo size={64}/>
            </SocialLinks>
            <SocialLinks href="https://www.tiktok.com/@liberte_ofc1" target="blank">
                <TiktokLogo size={64}/>
            </SocialLinks>
            
        </HomeContainer>
    )
}