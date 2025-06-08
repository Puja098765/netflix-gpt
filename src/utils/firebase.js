// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmIR-FoQ0bVetiixXzFpfpnKUArAnXfHU",
  authDomain: "netflixgpt-df241.firebaseapp.com",
  projectId: "netflixgpt-df241",
  storageBucket: "netflixgpt-df241.firebasestorage.app",
  messagingSenderId: "387628320660",
  appId: "1:387628320660:web:03effa4b41c7a8551ff181",
  measurementId: "G-JSQ8NGJB98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();