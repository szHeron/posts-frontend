import styled from "styled-components";

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    color: white;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.activity};
    border-radius: 12px;
    transition: all;
    cursor: pointer;

    :hover {
        svg {
            height: 68px;
            width: 68px;
        }
    }

    p    {
        width: 40%;
        text-align: center;
        color: gray;
        font-size: small;
        font-weight: 200;
    }
`

export const Preview = styled.img`
    align-self: center;
    width: auto;
    height: 16rem;

    @media (min-width: 768px) and (max-width: 1366px){
        width: auto;
        height: 10rem;
    }
`