import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDaFH9J_6F8Sqd1XgKv_wit-3Rksu07SlM',
    authDomain: 'shin-line-clone.firebaseapp.com',
    projectId: 'shin-line-clone',
    storageBucket: 'shin-line-clone.appspot.com',
    messagingSenderId: '601042434753',
    appId: '1:601042434753:web:695e93b0316845f72ff240',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
