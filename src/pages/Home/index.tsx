import { useEffect, useState } from "react"
import { Timestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { getPosts } from "../../utils/getPosts";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import { Container, Header, PostsArea } from "./styles"
import { Post } from "../../components/Post"
import { Profile } from "../../components/Profile"
import useAuth from "../../hook/useAuth"
import { NewPost } from "../../components/NewPost"
import { UserProps } from "../../context/AuthContext";
import { updatePost } from "../../utils/updatePost";
import { getUniquePost } from "../../utils/getUniquePost";

export interface PostData {
    content: string
    description: string
    author: UserProps
    likes: Array<string>
    postId: string
    createdAt: Timestamp
}

export default function Home(){
    const { user } = useAuth()
    const [ posts, setPosts ] = useState<PostData[]>([]);
    const [ loading, setLoading ] = useState(true)
    const { id } = useParams()
    
    async function getNewPosts(){
        if(id)
            setPosts(await getUniquePost(id))
        else
            setPosts(await getPosts())
    }

    function generetePosts(){
        if(!posts.length){
            return <p>Não existe posts ainda, crie o primeiro!</p>
        }
        return posts.map((post, index)=>{
            const liked = post.likes.includes(user.id)
            return (
                <Post key={index} getNewPosts={getNewPosts} isConected={!user.id?false:true} handleButtonLikeClicked={handleButtonLikeClicked} liked={liked} post={post}/>
            )
        })
    }

    useEffect(()=>{
        if(!posts.length){
            setLoading(true)
            getNewPosts()
            setLoading(false)
        }
    }, [user])

    function handleButtonLikeClicked(postId: string, liked: boolean){
        updatePost(postId, user.id, liked)
        const updatedPosts = posts.map(post => {
            if (post.postId === postId) {
                if(liked){
                    const likes = post.likes.filter(item => item !== user.id);
                    return { ...post, likes };
                }else{
                    return { ...post, likes: [...post.likes, user.id] };
                }
            }
            return post;
        });
      
        setPosts(updatedPosts);
    }

    if(loading){
        return (
            <ActivityIndicator absolute/>
        )
    }else{
        return (
            <Container>
                <Header>
                    <Profile user={!user.id?null:user}/>
                </Header>
                <PostsArea>
                    {(user.id && !id)&&<NewPost getNewPosts={getNewPosts}/>}                  
                    {
                        generetePosts()
                    }
                </PostsArea>
            </Container>
        )
    }
}