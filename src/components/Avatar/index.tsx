import { AvatarPicture } from "./styles";
import DefaultAvatar from "../../assets/default_avatar.png"

interface AvatarProps{
    url: string
}

export function Avatar({url}: AvatarProps){
    return (
        <AvatarPicture src={url.length > 0?url:DefaultAvatar} alt="Avatar do perfil"/>
    )
}