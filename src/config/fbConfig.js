// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBkITg0RXd0ytrVLW2MNCMt-ia8NnQz06w",
    authDomain: "marioplan-ad410.firebaseapp.com",
    databaseURL: "https://marioplan-ad410.firebaseio.com",
    projectId: "marioplan-ad410",
    storageBucket: "marioplan-ad410.appspot.com",
    messagingSenderId: "364092086406",
    appId: "1:364092086406:web:9d6d0d95def2ea23b01907",
    measurementId: "G-D25TVY5X3C"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;