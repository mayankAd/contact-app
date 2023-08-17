// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudX_SNlCrHDHWj6N-ywKXUxmF2cS7bwU",
  authDomain: "vite-contact-8d629.firebaseapp.com",
  projectId: "vite-contact-8d629",
  storageBucket: "vite-contact-8d629.appspot.com",
  messagingSenderId: "385183134334",
  appId: "1:385183134334:web:01ce1538edf11c445cde2f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);