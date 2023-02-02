import styled from "styled-components";

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