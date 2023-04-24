import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyzcouyeMQU8vEags52XgUhnG7PdTCm4g",
    authDomain: "as2---tpdw.firebaseapp.com",
    projectId: "as2---tpdw",
    storageBucket: "as2---tpdw.appspot.com",
    messagingSenderId: "1005053439175",
    appId: "1:1005053439175:web:f77ddaecfea7d2e3a6a2e2"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;