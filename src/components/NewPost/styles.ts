import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "../../styles/Button";

export const NewPostTrigger = styled(Dialog.Trigger)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    color: white;
    padding: 10px;
    margin-top: 11vh;
    margin-bottom: 15px;
    border: 1px solid ${({theme})=>theme.colors.activity};
    border-radius: 12px;
    background-color: rgba(108, 0, 255, 0.1);
    transition: all;
    cursor: pointer;

    :hover {
        svg {
            height: 68px;
            width: 68px;
        }
    }
`

export const PostContent = styled(Dialog.Content)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: ${({theme})=>theme.colors.background};
    color: white;
    width: 60vw;
    padding: 20px;
    top: 5%;
    left: 20%;
    border-radius: 26px;
    
    form {
        display: flex;
        flex-direction: column;

        span {
            color: #FF9494;
            font-weight: 300;
        }
    }
`

export const Description = styled.textarea`
    padding: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.primary};
    border-radius: 8px;
    color: white;
    font-size: medium;
    font-weight: 500;
    resize: none;
    
    ::placeholder{
        color: gray;

    }

    &:focus{
        outline: none;
        border: 1px solid ${({theme})=>theme.colors.activity};
    }
`

export const CloseModal = styled(Dialog.Close)`
    position: absolute;
    top: 10%;
    left: 90%;
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export const FinishedButton = styled(Button)`
    background-color: #228B22;

    :hover {
        background-color: #2aae2a;
    }
`