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

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    max-height: 8vh;
    width: 100%;
`