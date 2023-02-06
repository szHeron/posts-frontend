import { useEffect, useState } from "react"
import { query, collection, getDocs, DocumentData } from "firebase/firestore"
import ActivityIndicator from "../components/ActivityIndicator";
import { db } from "../services/firebase";
import { Container } from "../styles/pages/styled.home"
import { Post } from "../components/Post"
import { Profile } from "../components/Profile"
import useAuth from "../hook/useAuth"
import { NewPost } from "../components/NewPost"
import { UserProps } from "../context/AuthContext";

export interface PostProps {
    content: string
    description: string
    author: UserProps
}

export default function Home(){
    const { user } = useAuth()
    const [ posts, setPosts ] = useState<DocumentData[]>([]);
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        async function getPosts() {
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            let tempPosts: Array<DocumentData> = []

            querySnapshot.forEach((doc) => {
                tempPosts.push(doc.data())
            })

            setPosts(tempPosts)
        }
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
                            <NewPost/>
                            <Profile user={user}/>
                        </>
                    )          
                }
                {posts.map((post, index)=>{
                    return (
                        <Post key={index} description={post.description} content={post.content} author={post.author}/>
                    )
                })}
            </Container>
        )
    }
}