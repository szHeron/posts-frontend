import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 8px;
    left: 80%;
    padding: 8px;
    border-radius: 8px;

    @media (max-width: 426px) {
        left: 5%;
    }

    p{
        margin: 0 0 4px 0;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 12px;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-weight: 300;
        font-size: 1em;
        color: gray;
        background-color: transparent;
        border: none;

        svg {
            fill: gray;
        }
    }
`