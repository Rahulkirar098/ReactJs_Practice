import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyApzU3dg7V_CRwe3XmnRQOukgEvsCCvfmQ",
    authDomain: "reactcrud-098.firebaseapp.com",
    databaseURL: "https://reactcrud-098-default-rtdb.firebaseio.com",
    projectId: "reactcrud-098",
    storageBucket: "reactcrud-098.appspot.com",
    messagingSenderId: "90201256515",
    appId: "1:90201256515:web:9ae03c4ee3b789e6ed9af6",
    measurementId: "G-PMX07L8B7Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();