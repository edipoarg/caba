const apiKey = import.meta.env.VITE_API_F_KEY;
const baseId = import.meta.env.VITE_BASE_ID;
const firebaseKey = import.meta.env.VITE_FIREBASE_KEY;
const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

const constants = {
  apiKey: `${apiKey}`,
  baseId: `${baseId}`,
  firebaseKey: `${firebaseKey}`,
  reCaptchaKey: `${reCaptchaKey}`,
};

export default constants;
