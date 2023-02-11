import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import copy from "copy-to-clipboard";
import useAuth from '../../hook/useAuth';
import { DeletePost } from "../../utils/deletePost";
import share from "../../assets/share.svg"
import trash from "../../assets/trash.svg"
import { PostOptionsContent, PostOptionsArrow, Option } from './styles';

export function PostOptions({postId, authorId}: {postId: string, authorId: string}){
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
                        verifyUserIsAuthorOrAdmin()&&<Option onClick={()=>{DeletePost(postId)}}>
                             <img src={trash} alt="Deletar post"/>
                            Excluir
                        </Option>
                    }
                    <PostOptionsArrow/>
                </PostOptionsContent>
            </Popover.Portal>
        </Popover.Root>
    )
}