import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

const provider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader, setLoader]= useState(true);

    const singup = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userUpdate = (userInfo) =>{
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const singin = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singinWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then(() => {})
        .catch(err => {
            console.log(err);
        })
    }

    const logout = () =>{
        signOut(auth)
        .then(() =>{})
        .catch()

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser)
             setLoader(false)
         })
         return () => unsubscribe()
     },[])

    const authInfo={
        user,
        singup,
        userUpdate,
        singin,
        logout,
        singinWithGoogle,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;