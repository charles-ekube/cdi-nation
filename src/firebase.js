// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkhXK2seso8qTWASDhEKNaHVtq44PAS48",
    authDomain: "cdi-partnership.firebaseapp.com",
    projectId: "cdi-partnership",
    storageBucket: "cdi-partnership.appspot.com",
    messagingSenderId: "967460709380",
    appId: "1:967460709380:web:ef41f4e5672e6262ec0151",
    measurementId: "G-R3WMX24X1N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Export the services you need
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
