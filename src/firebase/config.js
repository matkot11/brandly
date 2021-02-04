import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCoRU8_dXcPcZXle-0xgTo_f7iEbPBG8Eo',
  authDomain: 'brandly-7118c.firebaseapp.com',
  projectId: 'brandly-7118c',
  storageBucket: 'brandly-7118c.appspot.com',
  messagingSenderId: '320989699054',
  appId: '1:320989699054:web:48729601885ee27a448cff',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
