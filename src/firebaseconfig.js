import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA6q5NLB6_Z_5usEtcAN07zXT1Kn8SCndc",
    authDomain: "react-autentification.firebaseapp.com",
    projectId: "react-autentification",
    storageBucket: "react-autentification.appspot.com",
    messagingSenderId: "415042600083",
    appId: "1:415042600083:web:1f395fa5e0201134556166"
  };


const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire);

export {auth};