import styled from "styled-components";
import { ButtonOutline } from "../../styles/Button";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 8px;
    left: 80%;
    padding: 8px;
    border-radius: 8px;

    a{
        width: 20vw;
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

    @media (max-width: 426px) {
        left: 5%;

        a {
            width: 100vw;
        }
    }
`

export const LogInButton = styled(ButtonOutline)`
    margin-top: 0;
    padding: 12px;
`

export const LogoutButton = styled.button`
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
`