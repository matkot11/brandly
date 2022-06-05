import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBN0HIjYUHcbgYHM243U4hx0AkArYtZ7nM',
  authDomain: 'brandly-ae49a.firebaseapp.com',
  projectId: 'brandly-ae49a',
  storageBucket: 'brandly-ae49a.appspot.com',
  messagingSenderId: '259004423863',
  appId: '1:259004423863:web:ead3394c0eefa2da973732',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
