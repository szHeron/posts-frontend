import { createContext, ReactNode, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

export type UserProps = {
  id: string,
  name: string,
  avatar: string
}
  
type AuthContextType = {
  user: UserProps,
  signOutAccount: () => Promise<void>,
  signInWithEmailAndPasswordFirebase: (email: string, password: string) => Promise<void>
  signUpWithEmailAndPasswordFirebase: (email: string, password: string, name: string, avatar: string | Blob) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider(props: AuthContextProviderProps){
  const [user, setUser] = useState<UserProps>({id: "", name: "", avatar: ""});

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const { uid } = user;
        if(uid){
          const userData = await getUser(uid);
          setUser({
            id: uid,
            name: userData.name,
            avatar: userData.avatar
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
    }catch(e){
      console.log(e)
      throw new Error("Erro ao sair da conta!");
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
        setUser({id: user.uid, name: userData.name, avatar: userData.avatar})
      }
    }catch(e){
      throw new Error("Email ou senha errado!");
    }
  }

  async function signUpWithEmailAndPasswordFirebase(email: string, password: string, name: string, avatar: Blob | string){
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      registerNewUser(response.user.uid, name, avatar)
    }catch(e){
      console.log(e)
      throw new Error("Erro ao cadastrar usuario");
    }
  }  

  async function getUser(id: string){
    const docRef = doc(db, "users", id);
    try{
      const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        throw new Error("Não foi possível encontrar o usuário");
      }
    }catch(error){
      throw new Error("Erro ao recuperar o usuário");
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
      await setDoc(doc(db, "users", id), {id: id, name: name, avatar: image_url})
      setUser({id, name, avatar: image_url})
    }catch(e){
      console.log(e)
      throw new Error("Erro ao salvar usuario");
    }
  }

  return(
    <AuthContext.Provider value={{user, signInWithEmailAndPasswordFirebase, signUpWithEmailAndPasswordFirebase, signOutAccount}}>
      {props.children}
    </AuthContext.Provider>            
  )
}