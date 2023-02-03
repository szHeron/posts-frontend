import { PostContainer, PostImage, TextArea } from "../styles/components/styled.post";
import { Author } from "./Author";
import { PostProps } from "../pages/Home";

export function Post({description, content}: PostProps){
    return(
        <PostContainer>
            <Author/>
            <PostImage alt="Imagem sobre o post" src="https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5"/>
            <TextArea>
                {description}
            </TextArea>
        </PostContainer>
    )
}