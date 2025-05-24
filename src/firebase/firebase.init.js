// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJsmQMUqvGX4N6HPYFsjNwrjkHlomAWk8",
    authDomain: "a10-recipe-book-app.firebaseapp.com",
    projectId: "a10-recipe-book-app",
    storageBucket: "a10-recipe-book-app.firebasestorage.app",
    messagingSenderId: "359519156225",
    appId: "1:359519156225:web:0ac675bf492591f1182800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);