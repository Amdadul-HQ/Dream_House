import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)


const ContextComponent = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password )
    }
    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>  {
        const unSubcribe = onAuthStateChanged(auth,currentUser => {
            if(currentUser){
                setUser(currentUser)
            }
        });
        return () => unSubcribe()
    },[])

    const info = { signUp ,logIn ,user }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;