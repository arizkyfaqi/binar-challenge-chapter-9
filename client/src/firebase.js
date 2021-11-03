import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDXRiAV0UNeAZBW-rrKf_jby3cpJpqIATs",
  authDomain: "challenge-chapter-9---group-2.firebaseapp.com",
  databaseURL:
    "https://challenge-chapter-9---group-2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "challenge-chapter-9---group-2",
  storageBucket: "challenge-chapter-9---group-2.appspot.com",
  messagingSenderId: "491729851404",
  appId: "1:491729851404:web:620fdd1a9817ba6a5f4a29",
  measurementId: "G-BGR6J8DLRJ",
});

export const auth = app.auth();
export default app;
