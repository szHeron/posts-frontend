import * as Popover from '@radix-ui/react-popover';
import useAuth from '../../hook/useAuth';
import { DeletePost } from "../../utils/deletePost";
import { PostOptionsContent, ClosePostOptions, PostOptionsArrow, Option } from './styles';

export function PostOptions({postId, imageUrl, authorId}: {postId: string, imageUrl: string, authorId: string}){
    const { user } = useAuth()

    function verifyUserIsAuthorOrAdmin(){
        if(user.user_type === "admin" || authorId === user.id)
            return true
        else
            return false
    }

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button type="button">
                    <svg width={38} height={38} fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z"/></svg>
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <PostOptionsContent>
                    <Option>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z"/></svg>
                        Compartilhar
                    </Option>
                    {
                        verifyUserIsAuthorOrAdmin()&&<Option onClick={()=>{DeletePost(postId, imageUrl)}}>
                            <svg fill="#fff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/></svg>
                            Excluir
                        </Option>
                    }
                    <ClosePostOptions/>
                    <PostOptionsArrow/>
                </PostOptionsContent>
            </Popover.Portal>
        </Popover.Root>
    )
}