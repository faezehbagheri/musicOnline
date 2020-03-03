import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUJ-B2mg7IawoxW79Lm-nKTeL27vI-5-Y",
    authDomain: "authproje.firebaseapp.com",
    databaseURL: "https://authproje.firebaseio.com",
    projectId: "authproje",
    storageBucket: "authproje.appspot.com",
    messagingSenderId: "82458827102",
    appId: "1:82458827102:web:4a8f47b641b6ebc4cd97cf",
    measurementId: "G-78LB4B4RJ4"
};

// class Firebase {
//     constructor() {
//         app.initializeApp(config);
//         this.auth = app.auth();

//         this.googleProvider = new app.auth.GoogleAuthProvider();
//     }
    
//     doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

//     doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

//     doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

//     doSignOut = () => this.auth.signOut();

//     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
//     doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

// }
firebase.initializeApp(config);
// export default Firebase
export const auth = firebase.auth();
export default firebase;