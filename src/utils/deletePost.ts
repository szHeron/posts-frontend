import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase"

export async function DeletePost(postId: string){
    await deleteDoc(doc(db, "posts", postId));
}