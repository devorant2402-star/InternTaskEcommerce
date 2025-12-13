// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔴 Paste your own config from Firebase here
const firebaseConfig = {
  apiKey: "AIzaSyD_I1Uavq7Ez4vsaT2Z4AflESYA3PUmLms",
  authDomain: "ecommerce-auth-f0c11.firebaseapp.com",
  projectId: "ecommerce-auth-f0c11",
  storageBucket: "ecommerce-auth-f0c11.firebasestorage.app",
  messagingSenderId: "721769058782",
  appId: "1:721769058782:web:f115936fa59620c81c4d4f",
  measurementId: "G-J5KJ8M35C9"
};

const app = initializeApp(firebaseConfig);

// ✅ These are the exports Signin.js & Signup.js need
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
