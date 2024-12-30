// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMXE7nNPehw14NRAcd201Ar12OCGghsjw",
  authDomain: "hi-twitter-5852d.firebaseapp.com",
  projectId: "hi-twitter-5852d",
  storageBucket: "hi-twitter-5852d.firebasestorage.app",
  messagingSenderId: "861591629668",
  appId: "1:861591629668:web:73ff4bfcb3627ac08ad471",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
