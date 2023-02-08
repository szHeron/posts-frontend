import { useEffect, useState } from "react"
import { getPosts } from "../../utils/getPosts";
import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import { Container, Header } from "./styles"
import { Post } from "../../components/Post"
import { Profile } from "../../components/Profile"
import useAuth from "../../hook/useAuth"
import { NewPost } from "../../components/NewPost"
import { UserProps } from "../../context/AuthContext";
import { updatePost } from "../../utils/updatePost";

export interface PostData {
    content: string
    description: string
    author: UserProps
    likes: Array<string>
    postId: string
}

export default function Home(){
    const { user } = useAuth()
    const [ posts, setPosts ] = useState<PostData[]>([]);
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        async function setNewPosts(){
            setPosts(await getPosts())
        }

        if(!posts.length){
            setLoading(true)
            setNewPosts()
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
                {
                    posts.map((post, index)=>{
                        const liked = post.likes.includes(user.id)
                        return (
                            <Post key={index} handleButtonLikeClicked={handleButtonLikeClicked} postId={post.postId} liked={liked} likes={post.likes} description={post.description} content={post.content} author={post.author}/>
                        )
                    })
                }
            </Container>
        )
    }
}