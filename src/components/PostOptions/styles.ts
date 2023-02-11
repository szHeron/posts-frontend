import styled from "styled-components"
import * as Popover from '@radix-ui/react-popover';

export const PostOptionsContent = styled(Popover.Content)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({theme})=>theme.colors.darkGray};
    color: #fff;
    width: 10vw;
    border-radius: 12px;
    padding: 14px;

    @media (max-width: 426px) {
        width: 40vw;
    }

`

export const PostOptionsArrow = styled(Popover.Arrow)`
    width: 12px;
    height: 12px;
    fill: ${({theme})=>theme.colors.darkGray};
`

export const Option = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    font-size: medium;
    color: #A4A4A4;
    width: 100%;
    padding: 12px;
    border: none;
    background-color: transparent;
    cursor: pointer;
     
    img{
        width: 22px;
        height: 22px;
        margin-right: 14px;
    }

    span {
        font-weight: 300;
        color: #22bb33;
    }

    :hover {
        background-color: #373737;
        border-radius: 8px;
    }
`