import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 15px;
    padding: 8px;
    border-radius: 8px;
    left: 80%;
    background: rgba(255, 255, 255, 0.2);

    p{
        margin: 0 0 4px 0;
    }

    button {
        display:flex;
        align-items: center;
        cursor: pointer;
        font-weight: 300;
        padding: 0;
        font-size: 1em;
        color: white;
        gap: 5px;
        background-color: transparent;
        border: none;
    }

`