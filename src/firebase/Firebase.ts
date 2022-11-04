import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGg7heA_m0p-ek8dTM65tOxaKFYBtqdNA',
  authDomain: 'audiophile-michalskolak.firebaseapp.com',
  projectId: 'audiophile-michalskolak',
  storageBucket: 'audiophile-michalskolak.appspot.com',
  messagingSenderId: '381051543416',
  appId: '1:381051543416:web:40c0f5657ead4a1238f28d',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
