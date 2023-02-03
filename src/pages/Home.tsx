import { useEffect, useState } from "react"
import { query, collection, getDocs, DocumentData } from "firebase/firestore"
import ActivityIndicator from "../components/ActivityIndicator";
import { db } from "../services/firebase";
import { Container } from "../styles/pages/styled.home"
import { Post } from "../components/Post"
import { Profile } from "../components/Profile"
import useAuth from "../hook/useAuth"
import { NewPost } from "../components/NewPost"

export interface PostProps {
    content: string
    description: string
}

export default function Home(){
    const { user } = useAuth()
    const [ posts, setPosts ] = useState<DocumentData[]>([]);
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        async function getPosts() {
            setLoading(true)
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            let tempPosts: Array<DocumentData> = []
            querySnapshot.forEach((doc) => {
                tempPosts.push(doc.data())
            })
            setPosts(tempPosts)
            setLoading(false)
        }

        if(!posts.length)
            getPosts()
    }, [])

    if(loading)
        return (
            <ActivityIndicator/>
        )

    if(!user){
        return (
            <Container>
                <Profile user={null}/>
                {posts.map((post)=>{
                    return (
                        <Post description={post.description} content={post.content}/>
                    )
                })}
            </Container>
        )
    }else{
        return (
            <Container>
                <NewPost/>
                <Profile user={user}/>
                {posts.map((post)=>{
                    return (
                        <Post description={post.description} content={post.content}/>
                    )
                })}
            </Container>
        )  
    }
}