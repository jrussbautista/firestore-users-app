// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYQJHHFfwhYJ9nm1YS4XVTbZVQ6SpsgEc',
  authDomain: 'project-tasks-management-6aee9.firebaseapp.com',
  projectId: 'project-tasks-management-6aee9',
  storageBucket: 'project-tasks-management-6aee9.appspot.com',
  messagingSenderId: '957960620881',
  appId: '1:957960620881:web:d7d65d39ec3b6138ff6170',
  measurementId: 'G-C1WN2H0KRP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
