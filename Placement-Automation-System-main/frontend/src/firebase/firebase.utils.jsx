import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTPwGTpemPBwqm5y3aZr_euocbZ-In-Mc",
    authDomain: "placementas-cc886.firebaseapp.com",
    projectId: "placementas-cc886",
    storageBucket: "placementas-cc886.appspot.com",
    messagingSenderId: "582831762447",
    appId: "1:582831762447:web:de6eb04a8d94c33dfc077a",
    measurementId: "G-ZHKG8L5GT6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
