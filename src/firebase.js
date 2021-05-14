import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSBoDtUkfniOTJ7zEXbpxI1Cry38dGtz8",
    authDomain: "linkedin-clone-63a20.firebaseapp.com",
    projectId: "linkedin-clone-63a20",
    storageBucket: "linkedin-clone-63a20.appspot.com",
    messagingSenderId: "983878579638",
    appId: "1:983878579638:web:4f6fb6824a628c43e13d17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;