// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVz1eLeogmpBewrpFnfBO2WJ-RLJtzrtY",
  authDomain: "instructionmedia-30412.firebaseapp.com",
  databaseURL: "https://instructionmedia-30412-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instructionmedia-30412",
  storageBucket: "instructionmedia-30412.appspot.com",
  messagingSenderId: "653732220075",
  appId: "1:653732220075:web:ae0a989ca8d7375d3a3bee",
  measurementId: "G-CFNP2NFECL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
