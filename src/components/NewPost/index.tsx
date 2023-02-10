import { useState, FormEvent } from "react"
import { CreateNewPostButton, Description, GroupButtons, NewPostContainer, NewPostTitle } from "./styles"
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
            getNewPosts()
        }else{
            setMessage({...message, error: "Insira a descrição do post!"})
        }
    }


    if(loading){
        return <ActivityIndicator absolute/>
    }

    return(
        <NewPostContainer>
            <NewPostTitle>
                Criar novo post
            </NewPostTitle>
            <form>
                <Description maxLength={512} onChange={e => setPostContent({...postContent, description: e.target.value})} placeholder="Insira aqui a descrição do post."/>
                <span>
                    {message.error&&message.error}
                </span>
                <GroupButtons>
                    <UploadFile postContent={postContent} setPostContent={setPostContent}/>
                    <CreateNewPostButton type="submit" onClick={handleCreateNewPost}>
                        Publicar
                    </CreateNewPostButton>
                </GroupButtons>
            </form>
        </NewPostContainer>
    )
}