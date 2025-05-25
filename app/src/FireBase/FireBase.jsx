import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAnXz0y3ATSHcxuX6-VgPsBuJ0NL5XAWkU",
  authDomain: "linkedin-app-b000d.firebaseapp.com",
  projectId: "linkedin-app-b000d",
  storageBucket: "linkedin-app-b000d.firebasestorage.app",
  messagingSenderId: "74180665292",
  appId: "1:74180665292:web:861cbedcca9a096505c769",
  measurementId: "G-0VR09WQ4HE"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database=getFirestore(app)
