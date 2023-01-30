import { Container } from "../styles/pages/styled.home"
import { Post } from "../components/Post"
import { Profile } from "../components/Profile"
import useAuth from "../hook/useAuth"

export default function Home(){
    const { user } = useAuth()

    return (
        <Container>
            {
                user&&<Profile user={user}/>
            }
            <Post/>
        </Container>
    )
}