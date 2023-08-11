// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxoBSC9swW8KFkA6Rlt7c5WiMz3U3mc_E",
  authDomain: "react-chat-63e43.firebaseapp.com",
  projectId: "react-chat-63e43",
  storageBucket: "react-chat-63e43.appspot.com",
  messagingSenderId: "7465059653",
  appId: "1:7465059653:web:c95df402f396d2cc552a2c",
  measurementId: "G-T45MVNGYNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);