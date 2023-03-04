import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import {getFirestore} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyD-Hcj-v2YrTOCJ0zN85uJsAXpx-8R3_ZE",
  authDomain: "instagram-clone-project-79ba1.firebaseapp.com",
  projectId: "instagram-clone-project-79ba1",
  storageBucket: "instagram-clone-project-79ba1.appspot.com",
  messagingSenderId: "16045624068",
  appId: "1:16045624068:web:d6df2b09f49c45e2245e51",
};


const firebaseApp = initializeApp(config);

export const database = getFirestore();

export const auth = getAuth();

export default firebaseApp;
