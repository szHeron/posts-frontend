import { PostContainer, PostImage, TextArea } from "../styles/components/styled.post";
import { Author } from "./Author";

export function Post(){
    return(
        <PostContainer>
            <Author/>
            <PostImage alt="Imagem sobre o post" src="https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5"/>
            <TextArea>
                Metro Exodus é um jogo de tiro em primeira pessoa baseado em uma série de livros de ficção científica de Dmitry Glukhovsky. O jogo foi desenvolvido pela 4A Games e lançado em 2019 para Xbox One, PlayStation 4 e PC.
            </TextArea>
        </PostContainer>
    )
}