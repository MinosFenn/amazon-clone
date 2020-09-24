import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYp96CswqZlBTwCGri8iOM42BE6lGWeHA",
  authDomain: "clone-32d92.firebaseapp.com",
  databaseURL: "https://clone-32d92.firebaseio.com",
  projectId: "clone-32d92",
  storageBucket: "clone-32d92.appspot.com",
  messagingSenderId: "844663198721",
  appId: "1:844663198721:web:bf2da8ba2eb0d645fe9c00",
  measurementId: "G-Y2R770FQGN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
