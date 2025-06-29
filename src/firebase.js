  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyDUnNzjdW_n5GWpQJpBAr4KohESPBqBab4",
  authDomain: "hezymal-95499.firebaseapp.com",
  projectId: "hezymal-95499",
  storageBucket: "hezymal-95499.firebasestorage.app",
  messagingSenderId: "800869356630",
  appId: "1:800869356630:web:db942bc3e644a0723717f7",
  measurementId: "G-1ZC1WN0LCL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
