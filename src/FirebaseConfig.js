import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS0DrBy83DboPgaZq0Ue--k2b6YNNGsgA",
  authDomain: "playground-expo.firebaseapp.com",
  databaseURL: "https://playground-expo.firebaseio.com",
  projectId: "playground-expo",
  storageBucket: "playground-expo.appspot.com",
  messagingSenderId: "745612227818",
  appId: "1:745612227818:web:2308d59f9f343f4df41393",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const getServerTimeStamp = () => {
  firebase.firestore.Timestamp.fromDate(new Date());
};
