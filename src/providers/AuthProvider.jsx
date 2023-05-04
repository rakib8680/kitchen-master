import React, { createContext } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);






const AuthProvider = ({ children }) => {

    const user = 'Rakib Khan'



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

    // auth information 
    const authInfo = {
        user,
        handleGoogleSignIn,
        handleGithubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;