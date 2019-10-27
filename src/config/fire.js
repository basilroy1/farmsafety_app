import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC6Z6OnHaqTkTjG-t7gYr-HwZeQiV92DvU",
  authDomain: "farmsafety-77a54.firebaseapp.com",
  databaseURL: "https://farmsafety-77a54.firebaseio.com",
  projectId: "farmsafety-77a54",
  storageBucket: "farmsafety-77a54.appspot.com",
  messagingSenderId: "790149125820",
  appId: "1:790149125820:web:e618b776dda8abf6d8a2b9",
  measurementId: "G-W443JG25T1"
};

const fire = firebase.initializeApp(config);

export default fire;
