import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { DeletePost } from "../../utils/deletePost";
import { Option } from "../PostOptions/styles";
import trash from "../../assets/trash.svg"
import { AlertContent, AlertOverlay, CancelButton, DeleteButton } from "./styles";

export function AlertDeletePost({postId, getNewPosts}: {postId: string, getNewPosts: () => void}){
    return(
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <Option >
                    <img src={trash} alt="Deletar post"/>
                    Excluir
                </Option>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertOverlay/>
                <AlertContent>
                    <AlertDialog.Title className="AlertDialogTitle">Você tem certeza?</AlertDialog.Title>
                    <AlertDialog.Description className="AlertDialogDescription">
                        Essa ação não pode ser desfeita, ela apagará o post para sempre.
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel asChild>
                            <CancelButton>Cancelar</CancelButton>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <DeleteButton onClick={()=>{DeletePost(postId); getNewPosts()}}>Sim, apague o post</DeleteButton>
                        </AlertDialog.Action>
                    </div>
                </AlertContent>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}