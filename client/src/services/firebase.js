// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRiAV0UNeAZBW-rrKf_jby3cpJpqIATs",
  authDomain: "challenge-chapter-9---group-2.firebaseapp.com",
  projectId: "challenge-chapter-9---group-2",
  storageBucket: "challenge-chapter-9---group-2.appspot.com",
  messagingSenderId: "491729851404",
  appId: "1:491729851404:web:df14576d2dab354e5f4a29",
  measurementId: "G-W06FZZC0FG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
