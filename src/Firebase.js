// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNUGB3mSaacHz0B990cFEi00qR1GJ7mOI",
    authDomain: "e-clone-ad3b4.firebaseapp.com",
    projectId: "e-clone-ad3b4",
    storageBucket: "e-clone-ad3b4.appspot.com",
    messagingSenderId: "948678916756",
    appId: "1:948678916756:web:fc5d2a079bc6cb075fd281",
    measurementId: "G-ZRZ27CS2MZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db =app.firestore();
const auth = firebase.auth();

export { db, auth };