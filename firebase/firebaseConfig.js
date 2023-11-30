import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA53qzuVxQbhbKWfxIVG2s8Ax2EHxcIBvQ",
  authDomain: "next-practice-9f6f0.firebaseapp.com",
  projectId: "next-practice-9f6f0",
  storageBucket: "next-practice-9f6f0.appspot.com",
  messagingSenderId: "977522826109",
  appId: "1:977522826109:web:4ace32ea85d3be6bd04a14"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };