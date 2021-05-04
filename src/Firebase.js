import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0BbHC8qrbVIP5-Uk3Adx8EE-i2Udjbe8",
  authDomain: "my-resume-e9059.firebaseapp.com",
  projectId: "my-resume-e9059",
  storageBucket: "my-resume-e9059.appspot.com",
  messagingSenderId: "856086120535",
  appId: "1:856086120535:web:b74f6eb14087d1797d7b12",
  measurementId: "G-GPBNQR06NG",
});

const db = firebaseApp.firestore();

export default db;
