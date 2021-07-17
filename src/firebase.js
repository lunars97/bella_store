import firebase from "firebase/app";
import "firebase/auth";

const REACT_APP_FIREBASE_API_KEY = "AIzaSyB4ROwgzBW8FPa670LotxxsAFgSKKtXS8M";
const REACT_APP_FIREBASE_AUTH_DOMAIN = "bella-e56b3.firebaseapp.com";
const REACT_APP_FIREBASE_PROJECT_ID = "bella-e56b3";
const REACT_APP_FIREBASE_STORAGE_BUCKET = "bella-e56b3.appspot.com";
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "835379119079";
const REACT_APP_FIREBASE_APP_ID = "1:835379119079:web:2f9a623627036eab4ab342";
const REACT_APP_FIREBASE_MEASUREMENT_ID = "G-N2T8J9Q0F5";

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default firebase;
