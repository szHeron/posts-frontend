import { useEffect, useState } from "react"
import { query, collection, getDocs } from "firebase/firestore"
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import { db } from "../../services/firebase";
import { Container } from "./styles"
import { Post } from "../../components/Post"
import { Profile } from "../../components/Profile"
import useAuth from "../../hook/useAuth"
import { NewPost } from "../../components/NewPost"
import { UserProps } from "../../context/AuthContext";

export interface PostProps {
    content: string
    description: string
    author: UserProps
}

export default function Home(){
    const { user } = useAuth()
    const [ posts, setPosts ] = useState<PostProps[]>([]);
    const [ loading, setLoading ] = useState(true)

    async function getPosts() {
        const q = query(collection(db, "posts"));
        const querySnapshot = await getDocs(q);
        let tempPosts: Array<PostProps> = []

        querySnapshot.forEach((doc) => {
            tempPosts.push(doc.data() as PostProps)
        })

        setPosts(tempPosts)
    }

    useEffect(()=>{
        setLoading(true)
        getPosts()
        setLoading(false)
    }, [user])

    if(loading){
        return (
            <ActivityIndicator/>
        )
    }else{
        return (
            <Container>
                {
                    !user?(
                        <Profile user={null}/>
                    ):(
                        <>
                            <NewPost getPosts={getPosts}/>
                            <Profile user={user}/>
                        </>
                    )          
                }
                
            </Container>
        )
    }
}