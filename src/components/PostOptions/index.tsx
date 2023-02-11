import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import copy from "copy-to-clipboard";
import { AlertDeletePost } from "../AlertDeletePost";
import useAuth from "../../hook/useAuth";
import share from "../../assets/share.svg"
import { PostOptionsContent, PostOptionsArrow, Option } from "./styles";

export function PostOptions({postId, authorId, getNewPosts}: {postId: string, authorId: string, getNewPosts: () => void}){
    const [ copyState, setCopyState ] = useState(false)
    const { user } = useAuth()

    function verifyUserIsAuthorOrAdmin(){
        if(user.user_type === "admin" || authorId === user.id)
            return true
        else
            return false
    }

    function copyUrlPost(){
        copy(`https://posts-frontend-jet.vercel.app/post/${postId}`);
        setCopyState(true);
    }

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button type="button">
                    <svg width={28} height={28} fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <PostOptionsContent>
                    <Option
                        onClick={copyUrlPost}
                    >
                        {
                            copyState?(
                                <span>Link copiado com sucesso!</span>
                            ):(
                                <>
                                    <img src={share} alt="Compartilhar post"/>
                                    Compartilhar
                                </>
                                
                                
                            )}
                    </Option>
                    {
                        verifyUserIsAuthorOrAdmin()&&<AlertDeletePost getNewPosts={getNewPosts} postId={postId}/>
                    }
                    <PostOptionsArrow/>
                </PostOptionsContent>
            </Popover.Portal>
        </Popover.Root>
    )
}