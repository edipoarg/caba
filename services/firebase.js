// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import constants from "./constants";

const firebaseConfig = {
  apiKey: constants.firebaseKey,
  authDomain: "mapadelapoliciacaba-5011d.firebaseapp.com",
  projectId: "mapadelapoliciacaba-5011d",
  storageBucket: "mapadelapoliciacaba-5011d.appspot.com",
  messagingSenderId: "613709364108",
  appId: "1:613709364108:web:bb047b55dc138e68de74a9",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const storage = getStorage(app);
const db = getFirestore(app);

export {
  // Storage
  storage,
  ref,
  uploadBytes,
  getDownloadURL,

  // Firestore
  db,
  collection,
  addDoc,
  serverTimestamp,
};
