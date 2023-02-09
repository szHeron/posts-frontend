import styled from "styled-components";

export const HeaderPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 50vw;
    color: white;
    font-weight: 600;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${({theme})=>theme.colors.darkGray};

    div {
        margin-left: 8px;
        align-self: center;
    }

    p {
        margin: 0;
    }

    span {
        font-weight: 400;
        color: ${({theme})=>theme.colors.darkGray};
    }

    @media (max-width: 426px) {
        width: 90vw;
    }
`