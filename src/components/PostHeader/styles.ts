import styled from "styled-components";

export const HeaderPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    color: white;
    font-weight: 600;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${({theme})=>theme.colors.darkGray};

    section {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    div {
        margin-left: 8px;
        align-self: center;
    }

    p {
        margin: 0;
    }

    span {
        font-weight: 400;
        color: ${({theme})=>theme.colors.primary};
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media (max-width: 426px) {
        width: 90vw;
    }
`