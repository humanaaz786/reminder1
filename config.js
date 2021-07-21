import firebase from 'firebase';
require('@firebase/firestore');
export const firebaseConfig = {
  apiKey: "AIzaSyCAUKScas3JJpde1W4tJoJ0xxI0YSvx1vg",
  authDomain: "reminder-app-5bfff.firebaseapp.com",
  projectId: "reminder-app-5bfff",
  storageBucket: "reminder-app-5bfff.appspot.com",
  messagingSenderId: "21245689415",
  appId: "1:21245689415:web:a6020a5286d10a15c1fb62"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
else{
  firebase.app();
}