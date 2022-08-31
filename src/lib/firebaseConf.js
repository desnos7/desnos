
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyASKi8ICu7rRuQ07lxmluZBznquwA_gUPE",
  authDomain: "santevuejs.firebaseapp.com",
  projectId: "santevuejs",
  storageBucket: "santevuejs.appspot.com",
  messagingSenderId: "254599882583",
  appId: "1:254599882583:web:dbcc2429e949d771e08012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth= getAuth(app)

