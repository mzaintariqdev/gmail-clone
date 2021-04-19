import  firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBC2KUklXr2lSJ8P1IKyKIK-Si3lyw_SX0",
  authDomain: "clone-2a14a.firebaseapp.com",
  projectId: "clone-2a14a",
  storageBucket: "clone-2a14a.appspot.com",
  messagingSenderId: "923405480411",
  appId: "1:923405480411:w eb:dd0bf648e8c73e968437fe"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};