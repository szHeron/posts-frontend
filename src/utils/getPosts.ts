import { query, collection, getDocs, orderBy } from "firebase/firestore"
import { db } from "../services/firebase";
import { PostData } from "../pages/Home";

export async function getPosts() {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    let tempPosts: Array<PostData> = []

    querySnapshot.forEach((doc) => {
        tempPosts.push({...doc.data(), postId: doc.id} as PostData)
    })

    return tempPosts
}