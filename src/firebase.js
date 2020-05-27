import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0oW-dKL6FGBd9JfkX4Su0oDWNQVHEh44",
    authDomain: "makeupapp-10fa8.firebaseapp.com",
    databaseURL: "https://makeupapp-10fa8.firebaseio.com",
    projectId: "makeupapp-10fa8",
    storageBucket: "makeupapp-10fa8.appspot.com",
    messagingSenderId: "141173157583",
    appId: "1:141173157583:web:e1bce16186e268425d11ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
      google: new firebase.auth.GoogleAuthProvider()
  }

  export const firestore = firebase.firestore();

  export const functions = firebase.functions();

  export default firebase;