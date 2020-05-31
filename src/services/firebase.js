import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4VQXraKSivVydizexhs9KKRtAEgJKBOs",
    authDomain: "ticketing-d7350.firebaseapp.com",
    databaseURL: "https://ticketing-d7350.firebaseio.com",
    projectId: "ticketing-d7350",
    storageBucket: "ticketing-d7350.appspot.com",
    messagingSenderId: "354891909431",
    appId: "1:354891909431:web:73325359e5abf58a3b72b2",
    measurementId: "G-Q2GHJHW6CJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();

  export default firebase;