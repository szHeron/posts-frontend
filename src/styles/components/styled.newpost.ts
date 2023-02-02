import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"

export const NewPostTrigger = styled(Dialog.Trigger)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    color: white;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 12px;
    background-color: rgba(108, 0, 255, 0.1);
    transition: all;
    cursor: pointer;

    :hover {
        padding: 15px;
    }
`

export const PostContent = styled(Dialog.Content)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${({theme})=>theme.colors.background};
    color: white;
    width: 60vw;
    height: 70vh;
    padding: 20px;
    top: 15%;
    left: 20%;

    form {
        display: flex;
        flex-direction: column;
    }
`

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    color: white;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.activity};
    border-radius: 12px;
    transition: all;
    cursor: pointer;

    :hover {
        svg {
            height: 68px;
            width: 68px;
        }
    }

    span    {
        width: 40%;
        text-align: center;
        color: gray;
        font-size: small;
        font-weight: 200;
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