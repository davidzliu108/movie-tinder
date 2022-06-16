// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKqwdqsNgI46x2FXhhrqtWmDos8svCZ7E",
  authDomain: "movie-tinder-3aedd.firebaseapp.com",
  databaseURL: "https://movie-tinder-3aedd-default-rtdb.firebaseio.com",
  projectId: "movie-tinder-3aedd",
  storageBucket: "movie-tinder-3aedd.appspot.com",
  messagingSenderId: "251323104448",
  appId: "1:251323104448:web:3c7ed934d822ca5ced0125",
  measurementId: "G-V7E5D0Z4EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);