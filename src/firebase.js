import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBdvVmZk4LhlehiNbUlqmfPg3hYgzYc0Vk",
  authDomain: "fb-mern-111ea.firebaseapp.com",
  projectId: "fb-mern-111ea",
  storageBucket: "fb-mern-111ea.appspot.com",
  messagingSenderId: "1025016346983",
  appId: "1:1025016346983:web:5da45a7fbff384897397c2",
  measurementId: "G-H3SGS0FEFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
