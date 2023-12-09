// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aca4c.firebaseapp.com",
  projectId: "mern-estate-aca4c",
  storageBucket: "mern-estate-aca4c.appspot.com",
  messagingSenderId: "46460965878",
  appId: "1:46460965878:web:1f0ca6434e96807be0edd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);