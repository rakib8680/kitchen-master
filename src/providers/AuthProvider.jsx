import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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


    
    // auth information 
    const authInfo = {
        user,
        handleGoogleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;