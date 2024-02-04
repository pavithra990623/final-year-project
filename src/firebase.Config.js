import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBM8mOH6_keorOnwdhLK_OZsCC0VJrrPY",
  authDomain: "login-c057b.firebaseapp.com",
  projectId: "login-c057b",
  storageBucket: "login-c057b.appspot.com",
  messagingSenderId: "41305691684",
  appId: "1:41305691684:web:a8946d804a77cbef916ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getAuth(app);
export const imagedb = getStorage(app);
