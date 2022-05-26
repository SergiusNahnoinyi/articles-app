import { initializeApp } from 'firebase/app';
import 'dotenv/config';

const API_KEY = process.env.API_KEY;
const SENDER_ID = process.env.SENDER_ID;
const APP_ID = process.env.APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'articles-firebase.firebaseapp.com',
  projectId: 'articles-firebase',
  storageBucket: 'articles-firebase.appspot.com',
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
