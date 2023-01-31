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
    font-weight: 200;
`

export const ControledInput = styled.div`
    margin-bottom: 20px;
    width: 100%;
    
    span {
        color: #FF9494;
        font-weight: 300;
    }
`

export const Input = styled.input`
    padding: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.primary};
    border-radius: 8px;
    color: white;
    font-size: medium;
    font-weight: 500;

    ::placeholder{
        color: gray;

    }

    &:focus{
        outline: none;
        border: 1px solid ${({theme})=>theme.colors.activity};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;

    label {
        margin-bottom: 5px;
    }
`