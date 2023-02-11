import * as Dialog from '@radix-ui/react-dialog';
import { PostImage, ImageZoomContent } from './styles';

export function ModalImageZoom({content}: {content: string}){
    return (
        <Dialog.Root>
            <Dialog.Trigger style={{padding: 0, border: "none", backgroundColor: "transparent"}}>
                <PostImage alt="Imagem sobre o post" src={content}/>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay style={{width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", position:"fixed", inset: 0}}/>
                <ImageZoomContent>
                    <img alt="Imagem com zoom sobre o post" src={content}/>
                </ImageZoomContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}