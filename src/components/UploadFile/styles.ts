import styled from "styled-components";

export const ContentButton = styled.button`
    display: flex;
    border: none;
    background-color: ${({theme})=>theme.colors.darkGray};
    align-items: center;
    padding: 10px;
    font-size: medium;
    font-weight: 500;
    color: #A4A4A4;
    border-radius: 16px;
    gap: 4px;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`

export const Preview = styled.div`
    position: relative;
    
    button{
        position: absolute;
        left: 90%;
        padding: 2px;
        border: none;
        border-radius: 100%;
        background-color: ${({theme})=>theme.colors.activity};
        cursor: pointer;
    }

    img{
        width: auto;
        height: 8rem;
        margin: 8px 0 8px 0;
        border: 1px solid ${({theme})=>theme.colors.activity};

        @media (min-width: 768px) and (max-width: 1366px){
            width: auto;
            height: 10rem;
        }

        @media (max-width: 426px) {
            width: auto;
            height: 9rem;
        }
    }
`