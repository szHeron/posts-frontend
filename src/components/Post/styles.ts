import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    color: white;
    background-color: ${({theme})=>theme.colors.postBackground};
    margin-top: 20px;
    padding: 24px;
    border-radius: 12px;

    @media (max-width: 426px) {
        width: 85vw;
        margin-top: 12px;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: center;
    margin-top: 2vh;
    font-weight: 400;
    font-size: medium;

    span {
        margin: 0;
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top: 2vh;
`

export const Action = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    color: white;

    font-size: large;
`