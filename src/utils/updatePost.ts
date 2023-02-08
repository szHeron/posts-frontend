import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../services/firebase";

export async function updatePost(postId: string, userId: string, liked: boolean){
    const postRef = doc(db, "posts", postId);
    if(liked){
        await updateDoc(postRef, {
            likes: arrayRemove(userId)
        });
    }else{
        await updateDoc(postRef, {
            likes: arrayUnion(userId)
        });
    }
}