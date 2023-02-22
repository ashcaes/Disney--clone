import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjYWmGOF24amiZBn9HmzCWg1LOQE5lqls",
  authDomain: "disney-plus-clone-85c02.firebaseapp.com",
  projectId: "disney-plus-clone-85c02",
  storageBucket: "disney-plus-clone-85c02.appspot.com",
  messagingSenderId: "372304877997",
  appId: "1:372304877997:web:221f1aeb2f7dc828c26924",
  measurementId: "G-K1TBXY6XKS"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
