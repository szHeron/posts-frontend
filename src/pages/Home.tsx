import { Container } from "../styles/pages/styled.home"
import { Post } from "../components/Post"
import { Profile } from "../components/Profile"
import useAuth from "../hook/useAuth"
import { NewPost } from "../components/NewPost"

export default function Home(){
    const { user } = useAuth()

    if(!user){
        return (
            <Container>
                <Profile user={null}/>
                <Post/>
            </Container>
        )
    }else{
        return (
            <Container>
                <NewPost/>
                <Profile user={user}/>
                <Post/>
            </Container>
        )  
    }
}