// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection }  from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAYoH6ql1Au6sUlYekzQTItCQyitvSFvaM",
  authDomain: "cinemascoop-db38d.firebaseapp.com",
  projectId: "cinemascoop-db38d",
  storageBucket: "cinemascoop-db38d.appspot.com",
  messagingSenderId: "216082742534",
  appId: "1:216082742534:web:29042a4e4a6aa281ccf287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export const usersRef = collection(db,"users");

export default app;