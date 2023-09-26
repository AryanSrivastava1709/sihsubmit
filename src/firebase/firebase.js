import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApLvAXV7O3uCwkLHp_qESkX2xKvHInwrc",
  authDomain: "syntaxerror-sih.firebaseapp.com",
  projectId: "syntaxerror-sih",
  storageBucket: "syntaxerror-sih.appspot.com",
  messagingSenderId: "316010417429",
  appId: "1:316010417429:web:1bdbe4ec788d1396902d1c",
  measurementId: "G-XCLS0N8CR4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
