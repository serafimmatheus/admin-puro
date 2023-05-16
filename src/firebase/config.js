// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: process.env.NEXT_PLUBLIC_FIRABASE_API_KEY,
//     authDomain: process.env.NEXT_PLUBLIC_FIRABASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PLUBLIC_FIRABASE_PROJECT_ID,
//   });
// }

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBFa13JfTcO9S1IVL3FFOvaNZ20kU9f0kE",
    authDomain: "dashboard-puro.firebaseapp.com",
    projectId: "dashboard-puro",
  });
}

export default firebase;
