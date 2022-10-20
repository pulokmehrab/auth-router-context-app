import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firease.config';


export const AuthContext =createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
   const [user,setUser]= useState({displayName:' pulok'})

   const googleProvider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

    }
    const signWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = ()=>{
        
        return  signOut(auth);

    }
    useEffect( ()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
            console.log(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo={user, createUser,  signIn, logOut,signWithGoogle}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;