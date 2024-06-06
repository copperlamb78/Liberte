import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 3.5rem 0 3.5rem;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`
export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;


    display: flex;
    justify-content: space-around;
    align-items: center;
    
    img {
        position: absolute;
        border-radius: 9999px;
    }

    strong {
        color: ${props => props.theme['gold-100']};
        font-size: 2.5rem;
    }

    
`

export const DarkLightButton = styled.button`
    background: ${props => props.theme['gray-500']};
    border-radius: 9999px;
    transition: background 0.2s;
    border: 0;
    width: 5rem;
    color: ${props => props.theme['gray-300']};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${props => props.theme['white-100']};
    }
`