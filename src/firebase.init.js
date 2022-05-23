// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ3W6KoWIe_nDIKAvmadW7M7uVIFrQjpk",
    authDomain: "vartrap-manfacturer-company.firebaseapp.com",
    projectId: "vartrap-manfacturer-company",
    storageBucket: "vartrap-manfacturer-company.appspot.com",
    messagingSenderId: "1036391818631",
    appId: "1:1036391818631:web:15e0cff1cd9caa51d25f22"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;