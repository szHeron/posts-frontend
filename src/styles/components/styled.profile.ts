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
    color: white;
    font-weight: 600;

    p{
        margin: 0 0 8px 0;
    }

    span {
        font-weight: 400;
        gap: 5px;
        display:flex;
        justify-content: flex-end;
    }
`