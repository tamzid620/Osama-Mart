// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyBhiuCSGFID667xkR9iPt751ps-NUAXfLY",
//   authDomain: "osama-mart.firebaseapp.com",
//   projectId: "osama-mart",
//   storageBucket: "osama-mart.firebasestorage.app",
//   messagingSenderId: "1076107716250",
//   appId: "1:1076107716250:web:80f116ca1a7f5fbf276123",
//   measurementId: "G-XQ5WD0VRTE"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhiuCSGFID667xkR9iPt751ps-NUAXfLY",
  authDomain: "osama-mart.firebaseapp.com",
  projectId: "osama-mart",
  storageBucket: "osama-mart.firebasestorage.app",
  messagingSenderId: "1076107716250",
  appId: "1:1076107716250:web:80f116ca1a7f5fbf276123",
  measurementId: "G-XQ5WD0VRTE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { auth, app , getAuth};


