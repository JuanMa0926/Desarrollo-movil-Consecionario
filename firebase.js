// firebase.js
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;