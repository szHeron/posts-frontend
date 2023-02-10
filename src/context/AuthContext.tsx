import { createContext, ReactNode, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { VerifyErroCode } from "../utils/firebaseErrosLocalized";

export type UserProps = {
  id: string
  name: string
  avatar: string
  user_type: string
}
  
type AuthContextType = {
  user: UserProps
  signOutAccount: () => Promise<void>
  signInWithEmailAndPasswordFirebase: (email: string, password: string) => Promise<void>
  signUpWithEmailAndPasswordFirebase: (email: string, password: string, name: string, avatar: string | Blob) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider(props: AuthContextProviderProps){
  const [user, setUser] = useState<UserProps>({id: "", name: "", avatar: "", user_type: ""});

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const { uid } = user;
        if(uid){
          const userData = await getUser(uid);
          setUser({
            ...userData,
            id: uid
          });
        }
      }
    },(error)=>{
      console.log(error)
    })
    return()=>{
      unsubscribe();
    }
  },[])

  async function signOutAccount(){
    try{
      signOut(auth)
    }catch(error: any){
      throw new Error(VerifyErroCode(error.code));
    }
  }

  async function signInWithEmailAndPasswordFirebase(email: string, password: string){
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user
      if(!user){
        throw new Error("Usuario não existe, cadastre-o primeiro!");
      }else{
        const userData = await getUser(user.uid)
        setUser({...userData, id: user.uid})
      }
    }catch(error: any){
      throw new Error(VerifyErroCode(error.code));
    }
  }

  async function signUpWithEmailAndPasswordFirebase(email: string, password: string, name: string, avatar: Blob | string){
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      registerNewUser(response.user.uid, name, avatar)
    }catch(error: any){
      throw new Error(VerifyErroCode(error.code));
    }
  }  

  async function getUser(id: string){
    const docRef = doc(db, "users", id);
    try{
      const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        return docSnap.data() as UserProps
      } else {
        throw new Error("Não foi possível encontrar o usuário");
      }
    }catch(error: any){
      throw new Error(VerifyErroCode(error.code));
    }
  }

  async function registerNewUser(id: string, name: string, avatar: Blob | string){
    try{
      let image_url = ""
      if(avatar instanceof Blob){
        const formData = new FormData()
        const cloudName = import.meta.env.VITE_CLOUDNAME
        const preset = import.meta.env.VITE_PRESET_AVATAR
        
        formData.append("file", avatar);
        formData.append("upload_preset", preset);

        await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData).then((response)=>{
          image_url = response.data.secure_url
        })
      }
      await setDoc(doc(db, "users", id), {id: id, name: name, avatar: image_url, user_type: "user"})
      setUser({id, name, avatar: image_url, user_type: "user"})
    }catch(error: any){
      throw new Error(VerifyErroCode(error.code));
    }
  }

  return(
    <AuthContext.Provider value={{user, signInWithEmailAndPasswordFirebase, signUpWithEmailAndPasswordFirebase, signOutAccount}}>
      {props.children}
    </AuthContext.Provider>            
  )
}