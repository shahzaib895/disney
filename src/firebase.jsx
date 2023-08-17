import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAelUZFpuIETY8zFbDesj4OcNp0r6Y9V6I",
  authDomain: "disneyplus-clustox.firebaseapp.com",
  projectId: "disneyplus-clustox",
  storageBucket: "disneyplus-clustox.appspot.com",
  messagingSenderId: "406309813960",
  appId: "1:406309813960:web:afbff62f99b8ec612ceffd",
  measurementId: "G-HR6WMQZMRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
export {auth,provider} ;
export default db;
