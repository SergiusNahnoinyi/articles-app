import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import env from 'react-dotenv';

const API_KEY = env.API_KEY;
const SENDER_ID = env.SENDER_ID;
const APP_ID = env.APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'articles-firebase.firebaseapp.com',
  databaseURL:
    'https://articles-firebase-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'articles-firebase',
  storageBucket: 'articles-firebase.appspot.com',
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
