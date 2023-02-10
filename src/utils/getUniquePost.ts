import { getDoc, doc } from "firebase/firestore"
import { PostData } from "../pages/Home";
import { db } from "../services/firebase";

export async function getUniquePost(postId: string) {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);

    return [docSnap.data() as PostData]
}