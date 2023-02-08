import { collection, addDoc } from "firebase/firestore";
import axios from "axios";
import { db } from "../services/firebase";
import { NewPostData } from "../components/NewPost";
import { UserProps } from "../context/AuthContext";

export async function createNewPost(postContent: NewPostData, user: UserProps ){
    let image_url = ""
    if(postContent.content){
        const formData = new FormData();
        const cloudName = import.meta.env.VITE_CLOUDNAME
        const preset = import.meta.env.VITE_PRESET_POST
        formData.append("file", postContent.content);
        formData.append("upload_preset", preset);

        await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData).then((response)=>{
            image_url = response.data.secure_url
        })
    }

    await addDoc(collection(db, "posts"), {...postContent, author: user, content: image_url})
}