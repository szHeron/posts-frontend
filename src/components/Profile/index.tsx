import { Link } from "react-router-dom";
import { Avatar } from "../Avatar";
import { UserProps } from "../../context/AuthContext";
import { ProfileContainer, LogoutButton, LogInButton } from "./styles";
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
                    <LogInButton>
                        Entre aqui
                    </LogInButton>
                </Link>
            </ProfileContainer>
        )
    }

    return (
        <ProfileContainer>
            <Avatar url={user.avatar}/>
            <div>
                <p>{user.name}</p>
                <LogoutButton onClick={handleSignOut}>
                    <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z"/></svg>
                    SAIR
                </LogoutButton>
            </div>
        </ProfileContainer>
    )
}