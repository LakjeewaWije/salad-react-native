
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAW9WZuvB8Gnfccr4r5vICP5LtUpckrqLE",
    authDomain: "salad-c7560.firebaseapp.com",
    databaseURL: "https://salad-c7560.firebaseio.com",
    projectId: "salad-c7560",
    storageBucket: "salad-c7560.appspot.com",
    messagingSenderId: "74714045147",
    appId: "1:74714045147:web:05d9428bde130b82"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const auth = app.auth();