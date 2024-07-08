// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import constants from "./constants";

const firebaseConfig = {
  apiKey: constants.firebaseKey,
  authDomain: "mapadelapolicia-3a727.firebaseapp.com",
  projectId: "mapadelapolicia-3a727",
  storageBucket: "mapadelapolicia-3a727.appspot.com",
  messagingSenderId: "934050971737",
  appId: "1:934050971737:web:1e31e973b129e3308fb148",
  measurementId: "G-FRB1PPTX0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
