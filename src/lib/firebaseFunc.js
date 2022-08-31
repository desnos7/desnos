import { auth, db } from "@/lib/firebaseConf";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";

export const utilisateur = async (form, callback)=>{
    console.log(form)
    await createUserWithEmailAndPassword(auth,form.email,form.password)
    await addDoc(collection(db, "users"), form)
    return callback(true)
}

export const connexion = (form)=>{
    console.log(form)
    signInWithEmailAndPassword(auth,form.email,form.password)
    .then(userCredential=>console.log(userCredential.user))
    .catch(e=>console?.log(e.code))
}

