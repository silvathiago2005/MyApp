import { useContext } from 'react';
import { AuthContext } from '../contexts/auth'; 
import { initializeApp } from '@firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCarc2TAlNmet0ng_I8yAr_VWwhI4yAaT0",
    authDomain: "real-estate-management-4c792.firebaseapp.com",
    databaseURL: "https://real-estate-management-4c792-default-rtdb.firebaseio.com",
    projectId: "real-estate-management-4c792",
    storageBucket: "real-estate-management-4c792.appspot.com",
    messagingSenderId: "952912277632",
    appId: "1:952912277632:web:924dc4d87efac84d77b665"
  };
  
const app = initializeApp(firebaseConfig);

export function Autentication(email, password){
    if(email == "silvathiago2005@hotmail.com" && password == "Oficin@g3"){
        let data = {
            id: "123456789",
            nome: "Thiago Lopes",
            email: email,
        }

        return data;
    }

    return null;           
}

export function SignInDatabase(uid, email){
    const appDatabase = getDatabase(app);
    const { userContext } = useContext(AuthContext);
    let usuario = {};

    const usuarioRef = ref(appDatabase, 'users/' + uid);
    onValue(usuarioRef, (snapshot) => {
        usuario = {
            uid: uid,
            nome: snapshot.val().nome,
            email: email
        }
    });

    userContext(usuario);
}

export default app;