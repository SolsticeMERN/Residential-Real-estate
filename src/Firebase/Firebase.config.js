// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhpPYP14OoHsy7WC0i-dilGIT0FLlPbAk",
  authDomain: "assignment9-realestate.firebaseapp.com",
  projectId: "assignment9-realestate",
  storageBucket: "assignment9-realestate.appspot.com",
  messagingSenderId: "209958414115",
  appId: "1:209958414115:web:84fd7704c7b52e93284e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;