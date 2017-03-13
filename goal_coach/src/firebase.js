import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC6oVza6pn7pshNPeaDzEwrM5wFUdK4s4I",
    authDomain: "goalcoach-1a1f2.firebaseapp.com",
    databaseURL: "https://goalcoach-1a1f2.firebaseio.com",
    storageBucket: "goalcoach-1a1f2.appspot.com",
    messagingSenderId: "998170238795"
 };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');