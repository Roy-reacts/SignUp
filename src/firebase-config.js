import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDMrv2yNgN2UqCd8KhcjhjXEsEUBx9AKf8",
    authDomain: "letschat-f0fb4.firebaseapp.com",
    projectId: "letschat-f0fb4",
    storageBucket: "letschat-f0fb4.appspot.com",
    messagingSenderId: "754024984667",
    appId: "1:754024984667:web:1e30170dd414e39673cf7e",
    measurementId: "G-PC6RLJCH13"
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app)