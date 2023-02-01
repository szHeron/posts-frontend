import * as Dialog from '@radix-ui/react-dialog';

export function EditAvatar(){
    return (
        <Dialog.Root>
            <Dialog.Trigger style={{position: "absolute", bottom: "26%", right: "30%", padding: 4, backgroundColor: "#6C00FF", borderRadius:"50%", border: "none"}}>
                <svg fill="#fff" width={32} height={32} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fillRule="nonzero"/></svg>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay style={{width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", position:"fixed", inset: 0}}/>
                <Dialog.Content style={{position: "absolute", padding: 10, backgroundColor:"#fff", top: "50%", left: "40%"}}>
                    <Dialog.Title>
                        Edite seu avatar
                    </Dialog.Title>
                    <Dialog.Description>
                        descricao
                    </Dialog.Description>
                    <Dialog.Close>
                        fechar
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}