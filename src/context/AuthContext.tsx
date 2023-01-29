import { createContext, ReactNode, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";
import { setDoc, collection, doc, getDoc } from "firebase/firestore";

type User = {
  id: string,
  name: string,
  avatar: object
}
  
type AuthContextType = {
  user: User | undefined,
  signInWithEmailAndPasswordFirebase: (email: string, password: string) => Promise<void>
  signUpWithEmailAndPasswordFirebase: (email: string, password: string, name: string, avatar: object) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider(props: AuthContextProviderProps){
    const [user, setUser] = useState<User>();

    // useEffect(()=>{
    //   const unsubscribe = auth.onAuthStateChanged(user =>{
    //     if(user){
    //       const { uid } = user;
    //       if(uid)
    //       setUser({
    //         id: uid
    //       });
    //     }
    //   })
    //   return()=>{
    //     unsubscribe();
    //   }
    // },[])

    async function signInWithEmailAndPasswordFirebase(email: string, password: string){
      try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        if(!user){
          throw new Error("Usuario não existe, cadastre-o primeiro!");
        }else{
          const userData = await getUser(user.uid)
          setUser({id: user.uid, name: userData?.name, avatar: userData?.avatar})
        }
      }catch(e){
        console.log(e)
        throw new Error("Erro ao logar com o usuario");
      }
    }

    async function signUpWithEmailAndPasswordFirebase(email: string, password: string, name: string, avatar: object){
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password)
        setUser({id: response.user.uid, name: name, avatar: avatar})
        registerNewUser({id: response.user.uid, name: name, avatar: avatar})
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
          console.log("Usuário encontrado data:", docSnap.data());
          return docSnap.data()
        } else {
          console.log("Não foi possível encontrar o usuário");
        }
      }catch(error){
        console.log("Erro ao recuperar o usuário:", error);
      }
    }

    async function registerNewUser(user: User){
      try{
        const userRef = await setDoc(doc(db, "users", user.id), user)
      }catch(e){
        console.log("Error ao salvar usuario", e)
        throw new Error("Erro ao salvar usuario");
      }
    }

    return(
      <AuthContext.Provider value={{user, signInWithEmailAndPasswordFirebase, signUpWithEmailAndPasswordFirebase}}>
        {props.children}
      </AuthContext.Provider>            
    )
}