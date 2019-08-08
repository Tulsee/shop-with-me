import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBjLRso0n4jitrjKplvcIBf3YR3r-Cdaw",
    authDomain: "shop-with-me-f8c84.firebaseapp.com",
    databaseURL: "https://shop-with-me-f8c84.firebaseio.com",
    projectId: "shop-with-me-f8c84",
    storageBucket: "",
    messagingSenderId: "22296525257",
    appId: "1:22296525257:web:abeafa58f3d75351"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;