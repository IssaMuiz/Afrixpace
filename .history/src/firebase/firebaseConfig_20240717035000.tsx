import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhb_KF7S7VVnZg1hgaBJOVHtyIS89id4c",
  authDomain: "afrixpace.firebaseapp.com",
  projectId: "afrixpace",
  storageBucket: "afrixpace.appspot.com",
  messagingSenderId: "393751580635",
  appId: "1:393751580635:web:a3ebcedaf499b877dba1fe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
