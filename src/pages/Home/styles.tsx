import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({theme})=>theme.colors.background};
    color: white;
    overflow-x: hidden;
    min-height: 100vh;
`

export const PostsArea = styled.div`
    margin: 11vh 0 2vh 0;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    height: 10vh;
    width: 100%;
    background-color: ${({theme})=>theme.colors.postBackground};
`