import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    color: white;
    background-color: ${({theme})=>theme.colors.postBackground};
    margin-top: 20px;
    padding: 12px;
    border-radius: 20px;

    @media (max-width: 426px) {
        width: 90vw;
    }
`

export const PostImage = styled.img`
    object-fit: cover;
    max-width: 100%;
    height: auto;

    @media (min-width: 768px) {
        width: 60%;
        height: 60%;
    }

    @media (min-width: 1024px) {
        width: 40%;
        height: 40%;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: center;
    margin-top: 8px;
    font-weight: 400;
    font-size: medium;

    span {
        margin: 0;
    }
`

export const AuthorDescription = styled.p`
    align-self: flex-start;
    font-weight: 600;
    margin: 0 4px 0 0;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
    width: 100%;
`

export const Action = styled.button`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
`