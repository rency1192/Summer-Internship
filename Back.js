import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmtXC1UzAq6jXCOH6Nf_XLw86CkeB8g4M",
  authDomain: "whatsapp-clone-3f2ef.firebaseapp.com",
  projectId: "whatsapp-clone-3f2ef",
  storageBucket: "whatsapp-clone-3f2ef.appspot.com",
  messagingSenderId: "707959538346",
  appId: "1:707959538346:web:4049eb3b1feef4ebfe46d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
export { auth, provider }
export default db;
