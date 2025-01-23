// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDi6BVpKbggK05_RUN8cOrQOkLDXMA9zHU",
  authDomain: "users-project-5ee40.firebaseapp.com",
  projectId: "users-project-5ee40",
  storageBucket: "users-project-5ee40.firebasestorage.app",
  messagingSenderId: "1097068419959",
  appId: "1:1097068419959:web:ebc957d3d8a8de51e75f72",
  measurementId: "G-XGVKT20B4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// export const storage = getStorage(app);
export const Provider = new GoogleAuthProvider();
