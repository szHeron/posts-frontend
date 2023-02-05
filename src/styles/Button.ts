import styled from "styled-components";

export const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 18px;
    width: 40%;
    color: white;
    background-color: #6C00FF;
    border: none;
    border-radius: 8px;
    font-size: large;
    font-weight: 500;

    :hover{
        cursor: pointer;
        background-color: ${({theme})=>theme.colors.hover};
    }
`

export const ButtonOutline = styled.button`
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 18px;
    width: 40%;
    color: white;
    background-color: transparent;
    border: 1px solid #6C00FF;
    border-radius: 8px;
    font-size: large;
    font-weight: 500;

    :hover{
        cursor: pointer;
        background-color: ${({theme})=>theme.colors.hover};
    }
`