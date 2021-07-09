import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAP-JZ-V-z1HgUpG8jliweztJ7E5GVDfaM",
  authDomain: "expense-tracker-ctc.firebaseapp.com",
  projectId: "expense-tracker-ctc",
  storageBucket: "expense-tracker-ctc.appspot.com",
  messagingSenderId: "404904320783",
  appId: "1:404904320783:web:1ce1ffc20628698799e87a",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
