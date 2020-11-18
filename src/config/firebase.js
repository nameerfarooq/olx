import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAIKoe1gy54xbhUkMzO0evuofk4qC1loDQ",
    authDomain: "olxapp-7a78b.firebaseapp.com",
    databaseURL: "https://olxapp-7a78b.firebaseio.com",
    projectId: "olxapp-7a78b",
    storageBucket: "olxapp-7a78b.appspot.com",
    messagingSenderId: "283245151309",
    appId: "1:283245151309:web:9ba2fd457e4059933c0804",
    measurementId: "G-YW8NW1Q5MM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;