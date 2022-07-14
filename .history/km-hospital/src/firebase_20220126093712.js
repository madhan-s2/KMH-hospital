import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB39nz4bG2SwK_JVM88en-INj2dnwCE7MQ",
  authDomain: "km-hospital.firebaseapp.com",
  projectId: "km-hospital",
  storageBucket: "km-hospital.appspot.com",
  messagingSenderId: "135263992741",
  appId: "1:135263992741:web:937486f6d8f3d9ed1fc64c",
  measurementId: "G-9PC9TT6YWF"
};

firebase.initializeApp(firebaseConfig);
export default firebase;