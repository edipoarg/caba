// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import constants from "./constants";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: constants.firebaseKey,
  authDomain: "mapadelapoliciacaba-5011d.firebaseapp.com",
  projectId: "mapadelapoliciacaba-5011d",
  storageBucket: "mapadelapoliciacaba-5011d.appspot.com",
  messagingSenderId: "613709364108",
  appId: "1:613709364108:web:bb047b55dc138e68de74a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(constants.reCaptchaKey),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

export { storage, ref, uploadBytes, getDownloadURL };
