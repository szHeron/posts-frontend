import { doc, deleteDoc } from "firebase/firestore";
import axios from "axios";
import { db } from "../services/firebase";

export async function DeletePost(postId: string, imageUrl: string){
    await deleteDoc(doc(db, "posts", postId));
    const cloudName = import.meta.env.VITE_CLOUDNAME

    if(imageUrl){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };
        const result = imageUrl.match(/upload\/(.*?)\/Posts/);
        await axios.delete(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload/${result![1]}`, config).then((response)=>{
            console.log(response)
        })
    }
}