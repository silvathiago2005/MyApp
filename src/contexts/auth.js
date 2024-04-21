import React, { useState, createContext } from 'react';
import { Autentication } from '../services/FirebaseConnections';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const  AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    async function signIn(email, password){
        var usuario = await Autentication(email,password)
        if(usuario){
            setUser(usuario);
            AuthUser(usuario);
        }
        
    }

    async function SignOut(){
        setUser(null);
        await AsyncStorage.setItem("User", null);
    }

    async function AuthUser(data){
        await AsyncStorage.setItem("User", JSON.stringify(data));
    }

    return(
        <AuthContext.Provider value={{ signed: !!user ,user, AuthUser, signIn, SignOut }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;