  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCV0Mwjt0-UwNlFDF3jRO1CEYEC0r0lzuk",
  authDomain: "mlcinus3.firebaseapp.com",
  projectId: "mlcinus3",
  storageBucket: "mlcinus3.firebasestorage.app",
  messagingSenderId: "664386974042",
  appId: "1:664386974042:web:274d4617d9a9a9e803c363",
  measurementId: "G-5Z2YZTHZL7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
