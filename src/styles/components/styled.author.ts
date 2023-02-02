import styled from "styled-components";

export const AuthorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 50vw;
    background-color: ${({theme})=>theme.colors.background};
    color: white;
    font-weight: 600;
`

export const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 12px;
`