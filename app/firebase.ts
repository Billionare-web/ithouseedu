// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyAUX--ElDkecxuYJBlrcjvt1qpgkbP317Q",
  authDomain: "ithouseedu-b66a6.firebaseapp.com",
  projectId: "ithouseedu-b66a6",
  storageBucket: "ithouseedu-b66a6.firebasestorage.app",
  messagingSenderId: "608573653295",
  appId: "1:608573653295:web:087723a994e3a2fad821da",
  measurementId: "G-MT43F6SKW0",
};

// Firebase ilovasini boshlash
const app = initializeApp(firebaseConfig);

// Firestore'ga ulanish
const db = getFirestore(app);

export { db };
