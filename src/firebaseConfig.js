// src/config/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvKJMKEPT8OZwx-2t2q8wZOOxmOo2dKS4",
    authDomain: "vic-scissors.firebaseapp.com",
    projectId: "vic-scissors",
    storageBucket: "vic-scissors.appspot.com",
    messagingSenderId: "407265369856",
    appId: "1:407265369856:web:475f00cc6cf582e09e5de5",
    measurementId: "G-0CX91YXWSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export  {db, analytics};
