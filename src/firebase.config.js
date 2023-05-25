import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA_2TMGWlMLA9NeaLDDr_hx267ZuRr_g14",
    authDomain: "restaurentapp-59fba.firebaseapp.com",
    databaseURL: "https://restaurentapp-59fba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurentapp-59fba",
    storageBucket: "restaurentapp-59fba.appspot.com",
    messagingSenderId: "426304018879",
    appId: "1:426304018879:web:99bc98b57b53cd7d76a90a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};