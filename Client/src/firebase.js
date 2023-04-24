import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

firebase.initializeApp({
    // your config
    apiKey: "AIzaSyCg9XGjI22mVtqyRdHQiL15v38XYgkD4B4",
  
    authDomain: "mentorshalachat.firebaseapp.com",
  
    projectId: "mentorshalachat",
  
    storageBucket: "mentorshalachat.appspot.com",
  
    messagingSenderId: "798043476573",
  
    appId: "1:798043476573:web:7c4372f98a13e493aef3b4",
  
    measurementId: "G-MFN9B9WSDZ"
  
  })

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const analytics = firebase.analytics();
  // export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
  export const storage = getStorage();
  export const db = getFirestore()