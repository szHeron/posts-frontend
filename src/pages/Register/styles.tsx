import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: ${({theme})=>theme.colors.background};
    color: white;
`

export const AvatarAndPassword = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #673AB7;
    height: 100%;
    width: 50%;
`

export const Title = styled.h1`
    font-size: x-large;
    font-weight: 700;
    margin: 8px;
`

export const SubTitle = styled.p`
    color: gray;
    font-size: small;
    font-weight: 300;
    margin: 0px;
`

export const ControledInput = styled.div`
    margin-bottom: 20px;
    width: 100%;
    
    span {
        color: #FF9494;
        font-weight: 300;
    }

    @media (min-width: 768px) {
        margin-bottom: 10px;
    }
`

export const Redirect = styled.p`
    margin: 4px;
    font-size: small;
    align-self: center;

    a {
        text-decoration: none;
        color: ${({theme})=>theme.colors.hover};
    }
`

export const AvatarContent = styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 50px;
    
    img {
        height: 96px;
        width: 96px;
    }

    svg{
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        background-color: ${({theme})=>theme.colors.hover};
        padding: 4px;
        border-radius: 50%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    width: 60%;

    label {
        margin-bottom: 5px;
    }
`