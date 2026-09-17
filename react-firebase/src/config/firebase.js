// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOefJRmsvavi61ldOAhphWKwcf8kGKp4",
  authDomain: "react-firebase-6755c.firebaseapp.com",
  projectId: "react-firebase-6755c",
  storageBucket: "react-firebase-6755c.firebasestorage.app",
  messagingSenderId: "655076649079",
  appId: "1:655076649079:web:8d616da1c6b529c08bfe72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };