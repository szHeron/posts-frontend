import { createContext, ReactNode, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

type User = {
  id: string,
  name: string,
  avatar: string
}
  
type AuthContextType = {
  user: User | undefined,
  signInWithEmailAndPasswordFirebase: (email: string, password: string) => Promise<Boolean>
  signUpWithEmailAndPasswordFirebase: (email: string, password: string, name: string) => Promise<Boolean>
}

type AuthContextProviderProps = {
  children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider(props: AuthContextProviderProps){
    const [user, setUser] = useState<User>();

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
          const { displayName, photoURL, uid} = user;
    
          if(!displayName || !photoURL){
            throw new Error('Missing information from Google account');
          }
    
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          });
        }
      })
      return()=>{
        unsubscribe();
      }
    },[])

    async function signInWithEmailAndPasswordFirebase(email: string, password: string){
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log(user)
      return true
    }

    async function signUpWithEmailAndPasswordFirebase(email: string, password: string, name: string){
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        setUser({id: response.user.uid, name: name, avatar: "ainda n tem"})
      }catch(e){
        console.log(e)
        return false
      }finally{
        return false
      }
    }  
    
    // async function signInWithGoogle(){
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   const result = await auth.signInWithPopup(provider)
      
  
    //   if(result.user){
    //     const { displayName, photoURL, uid} = result.user;
  
    //     if(!displayName || !photoURL){
    //       throw new Error('Missing information from Google account');
    //     }
  
    //     setUser({
    //       id: uid,
    //       name: displayName,
    //       avatar: photoURL
    //     });
    //   }
    // }  

    return(
      <AuthContext.Provider value={{user, signInWithEmailAndPasswordFirebase, signUpWithEmailAndPasswordFirebase}}>
        {props.children}
      </AuthContext.Provider>            
    )
}