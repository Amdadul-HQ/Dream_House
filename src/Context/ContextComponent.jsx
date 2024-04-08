import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)


const ContextComponent = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()


    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password )
    }
    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() =>  {
        const unSubcribe = onAuthStateChanged(auth,currentUser => {
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        });
        return () => unSubcribe()
    },[])

    const info = { signUp , logIn , signInWithGoogle , user , signInWithGitHub , logOut }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;