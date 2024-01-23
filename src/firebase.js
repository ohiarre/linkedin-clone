import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvLLmsZ0cNb3gxc9pRMBh1I7x1U9wEFIc",
  authDomain: "linkedin-clone-28dba.firebaseapp.com",
  projectId: "linkedin-clone-28dba",
  storageBucket: "linkedin-clone-28dba.appspot.com",
  messagingSenderId: "446045729081",
  appId: "1:446045729081:web:690ca58dd20fb1677538e8",
  measurementId: "G-7HFJ9WQ7BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth };