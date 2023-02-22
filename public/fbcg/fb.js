import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyC-yqwPP9eK5WKYpuEL5ZuGaiDP65rf48g",
  authDomain: "disney-clone-f8c04.firebaseapp.com",
  projectId: "disney-clone-f8c04",
  storageBucket: "disney-clone-f8c04.appspot.com",
  messagingSenderId: "321812289826",
  appId: "1:321812289826:web:498122ac5aa32fb9b26d7b",
  measurementId: "G-FW50FCRR62"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const analytics = getAnalytics(app);