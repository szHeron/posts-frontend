import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${({theme})=>theme.colors.background};
    color: white;
    overflow-x: hidden;
`