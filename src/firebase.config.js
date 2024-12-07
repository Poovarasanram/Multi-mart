
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDiF6htt_U_8NR5zfAIQFuZuFBZ9_xCtsI",
    authDomain: "productapp-70371.firebaseapp.com",
    projectId: "productapp-70371",
    storageBucket: "productapp-70371.appspot.com",
    messagingSenderId: "786558760708",
    appId: "1:786558760708:web:43413632acf2297276c251"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app