import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIyR2acBCboBmA0QROvZlZGcsUVWpAdVk",
    authDomain: "deakin-web-app-27b77.firebaseapp.com",
    projectId: "deakin-web-app-27b77",
    storageBucket: "deakin-web-app-27b77.appspot.com",
    messagingSenderId: "628383375826",
    appId: "1:628383375826:web:524a782e279e75adc0a80b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    promt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) =>{
    if (!userAuth.email) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    //console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    //console.log(userSnapshot.exists());

    if(! userSnapshot.exists())
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();
    

    try { 
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo
        })
    }
    catch(error){
        console.log('error in creating ', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createAuthUserWithEmailAndPassword(auth, email, password);
}