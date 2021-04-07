import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyAhf2WrzEVNumRYfrS6Rj4Nh_rEOa91i3k',
  authDomain: 'malley-clothing.firebaseapp.com',
  projectId: 'malley-clothing',
  storageBucket: 'malley-clothing.appspot.com',
  messagingSenderId: '886616119746',
  appId: '1:886616119746:web:78a0cf98256cd240c25e5b',
  measurementId: 'G-20RJY1DC1T',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
