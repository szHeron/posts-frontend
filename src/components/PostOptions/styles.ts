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
    padding: 22px 10px 10px 10px;
`

export const ClosePostOptions = styled(Popover.Close)`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
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
    margin-bottom: 8px;
    font-weight: 500;
    font-size: medium;
    color: #fff;
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
     
    svg{
        margin-right: 14px;
    }
`