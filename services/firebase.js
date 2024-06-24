// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2zS1ALtmPtCuSPncnmFX3ddLqXi7duhE",
  authDomain: "caba-prueba.firebaseapp.com",
  projectId: "caba-prueba",
  storageBucket: "caba-prueba.appspot.com",
  messagingSenderId: "254186025395",
  appId: "1:254186025395:web:0d7d9bce3e3a38582a9bc6",
  measurementId: "G-CJSKDWH5ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
