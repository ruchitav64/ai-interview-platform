import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoeTh-2Icq4qOGVu6PYUcgqc-frZP4V7Y",
  authDomain: "ai-interview-platform-9c05c.firebaseapp.com",
  projectId: "ai-interview-platform-9c05c",
  storageBucket: "ai-interview-platform-9c05c.firebasestorage.app",
  messagingSenderId: "428235646188",
  appId: "1:428235646188:web:7bcb3be691ef16a44af1c9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;