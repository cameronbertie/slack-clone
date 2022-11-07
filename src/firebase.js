import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDpQbb-_98NgjwZfLaCqmG0aL5QEguuMhI",
    authDomain: "slack-clone-dbc97.firebaseapp.com",
    projectId: "slack-clone-dbc97",
    storageBucket: "slack-clone-dbc97.appspot.com",
    messagingSenderId: "1045290035361",
    appId: "1:1045290035361:web:dd6aba5d3b7dc9f2d0a8e0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export { auth, provider, db, collection, addDoc, doc, serverTimestamp };