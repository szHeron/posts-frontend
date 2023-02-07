import styled from "styled-components";

export const AuthorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 50vw;
    background-color: ${({theme})=>theme.colors.background};
    color: white;
    font-weight: 600;

    p{
        margin: 0 0 0 8px;
    }
`