// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEsE0nftHJNi2CeGTis35v0KuypGeATLE",
  authDomain: "optapp-bebe6.firebaseapp.com",
  projectId: "optapp-bebe6",
  storageBucket: "optapp-bebe6.appspot.com",
  messagingSenderId: "499553699002",
  appId: "1:499553699002:web:0d1a71ab951bd9bc06ae83",
  measurementId: "G-MLK4ZH4916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
