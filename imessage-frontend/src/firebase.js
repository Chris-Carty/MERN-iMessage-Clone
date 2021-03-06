import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoLTXSZPoN_8yPGL7PhpoTcHtN_QpdQtc",
  authDomain: "i-message-clone-efcc8.firebaseapp.com",
  projectId: "i-message-clone-efcc8",
  storageBucket: "i-message-clone-efcc8.appspot.com",
  messagingSenderId: "1027174371095",
  appId: "1:1027174371095:web:c36df8241522b32d8ff152",
  measurementId: "G-Z9F0CT50BB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
