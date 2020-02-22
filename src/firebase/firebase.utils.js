import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC-sreBuRcp2GoQcAD7_u_z0R5cD2UyHt0",
    authDomain: "e-commerce-web-4cdd0.firebaseapp.com",
    databaseURL: "https://e-commerce-web-4cdd0.firebaseio.com",
    projectId: "e-commerce-web-4cdd0",
    storageBucket: "e-commerce-web-4cdd0.appspot.com",
    messagingSenderId: "53282714761",
    appId: "1:53282714761:web:8a1dc544596a4d055ec258"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account' } );
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;