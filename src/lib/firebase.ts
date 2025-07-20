// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-3VDowXZk3tXcc_FjM2r_TiCxsur8wk",
  authDomain: "portfolio-e85fb.firebaseapp.com",
  projectId: "portfolio-e85fb",
  storageBucket: "portfolio-e85fb.firebasestorage.app",
  messagingSenderId: "471767010012",
  appId: "1:471767010012:web:221532e123786488abc219",
  measurementId: "G-9YFTH7XEDQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };
