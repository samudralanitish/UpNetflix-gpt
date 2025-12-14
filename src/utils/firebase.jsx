// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3shC5JwsMDJcQSJFbdHVrqw9Ef2oUSvo",
  authDomain: "netflix-gpt-7e1b9.firebaseapp.com",
  projectId: "netflix-gpt-7e1b9",
  storageBucket: "netflix-gpt-7e1b9.firebasestorage.app",
  messagingSenderId: "920121816154",
  appId: "1:920121816154:web:b2bdfe4d63c007558d1463",
  measurementId: "G-92PCR3FPTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
