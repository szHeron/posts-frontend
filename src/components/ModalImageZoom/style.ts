import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const PostImage = styled.img`
    object-fit: cover;
    width: auto;
    height: 50vh;
    cursor: pointer;

    @media (max-width: 426px) {
        height: 40vw;
    }
`

export const ImageZoomContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme})=>theme.colors.background};
    color: white;

    img {
        width: auto;
        height: 80vh;

        @media (max-width: 426px) {
            width: 95vw;
            height: auto;
        }
    }

    
`