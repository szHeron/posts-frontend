import Avatar from "react-nice-avatar"
import { UserProps } from "../../context/AuthContext";
import { AuthorContainer } from "./styles";

interface AuthorProps{
    author: UserProps
}

export function Author(props: AuthorProps){
    return (
        <AuthorContainer>
            <Avatar style={{width: "3.5rem", height: "3.5rem" }} {...props.author.avatar}/>
            <p>{props.author.name}</p>
        </AuthorContainer>
    )
}