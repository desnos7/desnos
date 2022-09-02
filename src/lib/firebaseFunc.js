import { auth, db } from "@/lib/firebaseConf";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";


export const inscription = async (form, callback)=>{
    console.log(form)
    await createUserWithEmailAndPassword(auth,form.email,form.password)
    await addDoc(collection(db, "users"), form)
    return callback(true)
}

export const connexion= (form, callback)=>{
    let res = {
        user: null,
        error: null
    }
    signInWithEmailAndPassword(auth,form.email,form.password)
    .then(userCredential=>{
        res.user = userCredential.user
        return callback(res)
    })
    .catch(e=>{
        res.error = e.code
        return callback(res)
    })
}



