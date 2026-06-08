import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1Zd4fvQjvLvybOgQo0OcRxgewlGm5GyY",
  authDomain: "authentication-fd3fc.firebaseapp.com",
  projectId: "authentication-fd3fc",
  storageBucket: "authentication-fd3fc.firebasestorage.app",
  messagingSenderId: "276335454836",
  appId: "1:276335454836:web:287facf8629d6fd0f03f21",
  measurementId: "G-1K29GGNH7S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();