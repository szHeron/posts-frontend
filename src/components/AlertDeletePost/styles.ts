import styled, { keyframes} from "styled-components"
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button, ButtonOutline } from "../../styles/Button";

const overlayShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const AlertOverlay = styled(AlertDialog.Overlay)`
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const AlertContent = styled(AlertDialog.Content)`
    background-color: ${({theme})=>theme.colors.postBackground};
    color: #fff;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 500px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    @media (max-width: 426px) {
        width: 80vw;
    }
`

export const CancelButton = styled(ButtonOutline)`
    border-color: gray;

    :hover {
        background-color: #808080;
    }
`

export const DeleteButton = styled(Button)`
    color: white;
    background-color: #e61919;

    :hover {
        background-color: #e8000d;
    }
`