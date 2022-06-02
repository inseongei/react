// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDor7UElwj1ZRXOAnPpMS6FARqMNIS0S0",
  authDomain: "card-ddc65.firebaseapp.com",
  projectId: "card-ddc65",
  storageBucket: "card-ddc65.appspot.com",
  messagingSenderId: "245715137390",
  appId: "1:245715137390:web:b441df769297202d95477f",
  measurementId: "G-1TFZQCJFZ4"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();
