import { PostContainer, PostImage, Description } from "./styles";
import { Author } from "../Author";
import { PostProps } from "../../pages/Home";

export function Post({description, content, author}: PostProps){
    return(
        <PostContainer>
            <Author author={author}/>
            {content&&<PostImage alt="Imagem sobre o post" src={content}/>}
            <Description>
                {description}
            </Description>
        </PostContainer>
    )
}
