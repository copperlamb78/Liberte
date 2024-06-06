import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
`

export const CartazLiberte = styled.img`
    width: 50%;
    margin: 1rem 25.5%;
    border-radius: 8px;
    position: absolute;
`

export const SocialLinks = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 11%;
    margin-top: 5rem;
    width: 5rem;
    height: 5rem;
    text-decoration: none;
    color: ${props => props.theme['white-100']};
    background: ${props => props.theme['black-100']};
    border-radius: 9999px;
    


    &:hover {
        color: ${props => props.theme['red-700']}
    }
`