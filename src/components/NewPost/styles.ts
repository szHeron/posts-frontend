import styled from "styled-components";
import { Title } from "../../pages/Login/styles";

export const NewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({theme})=>theme.colors.postBackground};
    width: 50vw;
    color: white;
    padding: 24px;
    margin-bottom: 15px;
    border-radius: 12px;

    form {
        width: 100%;
    }

    span {
        color: #FF9494;
        font-weight: 300;
    }
    
    @media (max-width: 426px) {
        width: 85vw;
    }
`

export const NewPostTitle = styled(Title)`
    font-size: large;
    font-weight: 600;
`

export const Description = styled.textarea`
    padding: 18px;
    margin-top: 5px;
    margin-bottom: 12px;
    background-color: ${({theme})=>theme.colors.darkGray};
    border: 1px solid ${({theme})=>theme.colors.darkGray};
    width: calc(100% - 42px);
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

export const GroupButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const CreateNewPostButton = styled.button`
    display: flex;
    border: none;
    background-color: ${({theme})=>theme.colors.activity};
    align-items: center;
    padding: 10px;
    font-size: medium;
    font-weight: 500;
    color: #fff;
    border-radius: 16px;
    cursor: pointer;

    :hover {
        background-color: ${({theme})=>theme.colors.hover};
    }
`