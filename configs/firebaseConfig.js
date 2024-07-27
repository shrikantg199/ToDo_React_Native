// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.API_KEY,
  authDomain: "todo-5af56.firebaseapp.com",
  projectId: "todo-5af56",
  storageBucket: "todo-5af56.appspot.com",
  messagingSenderId: "981631130878",
  appId: "1:981631130878:web:b894e6ffa273765900d9af",
  measurementId: "G-QW5ZSYPGGQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
//const analytics = getAnalytics(app);
