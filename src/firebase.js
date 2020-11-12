import firebase from 'firebase';
// import firestore from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyARPxFFNmYOhU2GBVxuBkIuIFvK6QLqJIs',
  authDomain: 'fitinblogserver.firebaseapp.com',
  databaseURL: 'https://fitinblogserver.firebaseio.com',
  projectId: 'fitinblogserver',
  storageBucket: 'fitinblogserver.appspot.com',
};
// Initialize Firebase
firebase.initializeApp(config);

// Utils
const db = firebase.firestore();

// collection
const story = db.collection('story');
export {
  db,
  story,
};
