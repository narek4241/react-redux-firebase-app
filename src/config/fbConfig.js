import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// #note not sensitive data, later put in env vars if needed, opt
export const firebaseConfig = {
  apiKey: 'AIzaSyDvPthRAeeRc3U5V43nxDipTZm88NoyEfE',
  authDomain: 'marioplan-react-app-2cb3a.firebaseapp.com',
  databaseURL:
    'https://marioplan-react-app-2cb3a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'marioplan-react-app-2cb3a',
  storageBucket: 'marioplan-react-app-2cb3a.appspot.com',
  messagingSenderId: '1049126569131',
  appId: '1:1049126569131:web:03a408c457c471c5ae63ee',
  measurementId: 'G-J4KJ9JZNRP',
};

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
