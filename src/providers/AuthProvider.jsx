import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    // google signIn 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github sign in 
    const githubProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // sign out 
    const logOut = () => {
        return signOut(auth)
    }

    // set current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, []);


    // auth information 
    const authInfo = {
        user,
        handleGoogleSignIn,
        handleGithubSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;