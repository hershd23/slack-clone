import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRoI4DPj0EPDhLTi2T6SaT39oosxIvy58",
  authDomain: "slack-clone-fd602.firebaseapp.com",
  databaseURL: "https://slack-clone-fd602.firebaseio.com",
  projectId: "slack-clone-fd602",
  storageBucket: "slack-clone-fd602.appspot.com",
  messagingSenderId: "478916963343",
  appId: "1:478916963343:web:517c662db0b18a12c2077a",
  measurementId: "G-2WGWPTWY8J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;