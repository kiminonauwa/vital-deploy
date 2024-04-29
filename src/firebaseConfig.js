import firebase from "firebase/compat/app"; // Use compat version for v9 and above
import "firebase/compat/auth"; // Use compat version for v9 and above
import "firebase/compat/database"; // Use compat version for v9 and above

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBg-7ExLfb-2tRKW412KAQMEbpe32vMMNQ",
  authDomain: "esp32-test-acdca.firebaseapp.com",
  databaseURL: "https://esp32-test-acdca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-test-acdca",
  storageBucket: "esp32-test-acdca.appspot.com",
  messagingSenderId: "1014279432076",
  appId: "1:1014279432076:web:3c1137f7e0539cd62918a9"
});

export const auth = firebaseApp.auth();
export const db = firebaseApp.database(); // Access the Realtime Database
export default firebaseApp;
