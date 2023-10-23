import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign with google
    const provider = new GoogleAuthProvider();

    const handleGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    
    const authInfo = { user, loading, createUser, signInUser, handleGoogleUser, auth, provider, logOut }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {unSubscribe()};
    }, [])
    
    return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
    )
}

export default AuthProvider;