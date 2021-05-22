import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBl6drsW3WbwV0nUTlfZj-_H3A1at3X0PQ",
    authDomain: "expense-tracker-32c57.firebaseapp.com",
    projectId: "expense-tracker-32c57",
    storageBucket: "expense-tracker-32c57.appspot.com",
    messagingSenderId: "878374399805",
    appId: "1:878374399805:web:9f808c3abb435dfd1d9f54",
    measurementId: "G-4DT273TV6D"
};

const fire = firebase.initializeApp(config);
export default fire;