import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDl6zW1YEm70gqDMpWxcL3I8hJMUkbFOo8",
    authDomain: "fb-crud-react-e3460.firebaseapp.com",
    databaseURL: "https://fb-crud-react-e3460.firebaseio.com",
    projectId: "fb-crud-react-e3460",
    storageBucket: "fb-crud-react-e3460.appspot.com",
    messagingSenderId: "1084811830826",
    appId: "1:1084811830826:web:cfd4d3dfde21fea29f0553"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
  

export const db = fb.firestore();