import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBXAQdkExXqcbrjHUTNEdFbsdwA_L_i-Ts",
    authDomain: "km-hospital-portal.firebaseapp.com",
    projectId: "km-hospital-portal",
    storageBucket: "km-hospital-portal.appspot.com",
    messagingSenderId: "115873823605",
    appId: "1:115873823605:web:4417095c1c3705cda8f13c",
    measurementId: "G-0VPENR8VYJ"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;