import { UserProps } from "../../context/AuthContext";
import { AuthorContainer } from "./styles";
import { Avatar } from "../Avatar";

interface AuthorProps{
    author: UserProps
}

export function Author(props: AuthorProps){
    return (
        <AuthorContainer>
            <Avatar url={props.author.avatar}/>
            <p>{props.author.name}</p>
        </AuthorContainer>
    )
}