import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";
import { UserProps } from "../../context/AuthContext";
import { ProfileContainer } from "./styles";
import useAuth from "../../hook/useAuth";

interface ProfileProps {
    user: UserProps | null
}

export function Profile({user}: ProfileProps){
    const { signOutAccount } = useAuth()
    
    function handleSignOut(){
        signOutAccount()
        document.location.reload();
    }

    if(!user?.id){
        return (
            <ProfileContainer>
                <Link to="/login" style={{textDecoration: "none", color: "#fff"}}>
                    Entre aqui
                </Link>
            </ProfileContainer>
        )
    }

    return (
        <ProfileContainer>
            <Avatar url={user.avatar}/>
            <div>
                <p>{user.name}</p>
                <button onClick={handleSignOut}>SAIR</button>
            </div>
        </ProfileContainer>
    )
}