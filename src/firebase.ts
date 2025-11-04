// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (use your keys directly)
const firebaseConfig = {
  apiKey: "AIzaSyBcgpsKWBqHtwLOdAjMcTDUDSLiJAvYDos",
  authDomain: "farmguard-6a06d.firebaseapp.com",
  projectId: "farmguard-6a06d",
  storageBucket: "farmguard-6a06d.appspot.com",
  messagingSenderId: "636658596659",
  appId: "1:636658596659:web:1dd5f59e0cd9f936f0dc46",
  measurementId: "G-WTCLF2ST5H"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
