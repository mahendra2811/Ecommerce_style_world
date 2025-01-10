// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGcK1uhKt966dJMXUtE8sWEFM_vvgYwNU",
  authDomain: "styleworldecommerce.firebaseapp.com",
  projectId: "styleworldecommerce",
  storageBucket: "styleworldecommerce.firebasestorage.app",
  messagingSenderId: "565340120361",
  appId: "1:565340120361:web:1d8f7fba259c2c05d58338",
  measurementId: "G-JG6Y0BQBZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth , analytics, app } ;