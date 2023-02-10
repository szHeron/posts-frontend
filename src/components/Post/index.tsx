import { PostContainer, PostImage, Description, Actions, Action } from "./styles";
import { PostHeader } from "../PostHeader";
import { PostData } from "../../pages/Home";

interface PostProps {
    handleButtonLikeClicked: (postId: string, liked: boolean) => void
    liked: boolean
    post: PostData
    isConected: boolean
}

export function Post(props: PostProps){
    return(
        <PostContainer>
            <PostHeader createdAt={props.post.createdAt} author={props.post.author} postId={props.post.postId} imageUrl={props.post.content}/>
            {props.post.content&&<PostImage alt="Imagem sobre o post" src={props.post.content}/>}
            <Description>
                <span>{props.post.description}</span>
            </Description>
            <Actions>
                {
                    props.isConected&&<Action onClick={()=>props.handleButtonLikeClicked(props.post.postId, props.liked)}>
                    {
                        props.liked?
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#f00" width={32} height={32} viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                        )
                        :
                        (
                            <svg fill="#fff" width={32} height={32} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fillRule="nonzero"/></svg>
                        )
                    }
                    Curtir
                    </Action>
                }
                <p>{props.post.likes.length} Curtidas</p>
            </Actions>
        </PostContainer>
    )
}
