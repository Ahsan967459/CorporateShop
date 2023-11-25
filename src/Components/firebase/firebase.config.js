// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGjWaiEifhKPQbL0qn68xhyv9g3RdjB0w",
  authDomain: "corporateshopfinal.firebaseapp.com",
  projectId: "corporateshopfinal",
  storageBucket: "corporateshopfinal.appspot.com",
  messagingSenderId: "209510796435",
  appId: "1:209510796435:web:e4e1d2ac655be4ef379166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;