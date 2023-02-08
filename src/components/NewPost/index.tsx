import { useState, FormEvent } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { NewPostTrigger, PostContent, CloseModal, Description, FinishedButton } from "./styles"
import { Button } from "../../styles/Button"
import { UploadFile } from "../UploadFile";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";
import { createNewPost } from "../../utils/createNewPost";
import useAuth from "../../hook/useAuth";

export interface NewPostData {
    description: string
    content: File | null
    likes: Array<string>
    createdAt: Date
}

export function NewPost({getNewPosts}: {getNewPosts: () => void}){
    const { user } = useAuth();
    const [open, setOpen] = useState(false)
    const [postContent, setPostContent] = useState<NewPostData>({description: "", content: null, likes: [], createdAt: new Date()})
    const [message, setMessage] = useState({error: "", success: ""})
    const [loading, setLoading] = useState(false)

    async function handleCreateNewPost(e: FormEvent){
        e.preventDefault()
        if(postContent.description){
            setLoading(true)
            await createNewPost(postContent, user)
            setMessage({...message, success: "Post realizado com sucesso"})
            setPostContent({...postContent, description: "", content: null, createdAt: new Date()})
            setLoading(false)
        }else{
            setMessage({...message, error: "Insira a descrição do post!"})
        }
    }

    if(loading){
        return <ActivityIndicator absolute/>
    }

    return(
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <NewPostTrigger>
                <svg height={64} width={64} fill="#6C00FF" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>
            </NewPostTrigger>
            <Dialog.Portal>
                <Dialog.Overlay style={{width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.8)", position:"fixed", inset: 0}}/>
                <PostContent>
                    {message.success?(
                        <>
                            <Dialog.Title>{message.success}</Dialog.Title>
                            <FinishedButton onClick={()=>{getNewPosts();setOpen(false);setMessage({error:"", success:""})}}>
                                CONCLUIDO
                            </FinishedButton>
                        </>
                    ):(
                        <>
                            <Dialog.Title>
                                Novo post
                            </Dialog.Title>
                            <form onSubmit={handleCreateNewPost}>
                                <label>
                                    Imagem do post
                                </label>
                                <UploadFile postContent={postContent} setPostContent={setPostContent}/>
                                <label>
                                    Descrição do post
                                </label>
                                <Description maxLength={512} onChange={e => setPostContent({...postContent, description: e.target.value})} placeholder="ex: Meu novo pc"/>
                                {message.error&&<span>{message.error}</span>}
                                <Button type="submit">
                                    Criar novo post
                                </Button>
                            </form>
                            <CloseModal onClick={()=>setPostContent({...postContent, description: "", content: null, createdAt: new Date()})}>
                                <svg fill="#fff" width={32} height={32} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                            </CloseModal>
                        </>
                    )
                }
                </PostContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}