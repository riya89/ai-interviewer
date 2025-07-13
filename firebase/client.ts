// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASePBxddYhtTEl8mNkLadk5VDnjagvcos",
  authDomain: "ai-interviewer-4c78f.firebaseapp.com",
  projectId: "ai-interviewer-4c78f",
  storageBucket: "ai-interviewer-4c78f.firebasestorage.app",
  messagingSenderId: "820415792865",
  appId: "1:820415792865:web:4ec86c8372edc6ddf759a0",
  measurementId: "G-N20HHTPJSW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);