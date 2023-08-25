// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb8UZGDCd0MSvEoAb_a64pd9aAPxzT2NE",
  authDomain: "messenger-b6e9d.firebaseapp.com",
  projectId: "messenger-b6e9d",
  storageBucket: "messenger-b6e9d.appspot.com",
  messagingSenderId: "404264624868",
  appId: "1:404264624868:web:067ff60bd85a01332b42f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
