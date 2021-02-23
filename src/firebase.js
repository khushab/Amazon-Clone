// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDH6mUFYGj4ovkvP_NiIXertpi3JS5Frc",
  authDomain: "clone-f5b6a.firebaseapp.com",
  databaseURL: "https://clone-f5b6a.firebaseio.com",
  projectId: "clone-f5b6a",
  storageBucket: "clone-f5b6a.appspot.com",
  messagingSenderId: "677694698595",
  appId: "1:677694698595:web:fa47fb3ed837a770f03456",
  measurementId: "G-9FZE7CVX17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };