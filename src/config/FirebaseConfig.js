import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAn76Alys1lvSNzj9SclOtiGzFgHUN3Nos",
    authDomain: "appexample-90b2d.firebaseapp.com",
    databaseURL: "https://appexample-90b2d.firebaseio.com",
    projectId: "appexample-90b2d",
    storageBucket: "appexample-90b2d.appspot.com",
    messagingSenderId: "141824286478"
  };
  export const firebaseApp = firebase.initializeApp(config);