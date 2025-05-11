import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push, set } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyAGOq0pCDJzkwG1QwwWnRoTHEQu_ETeXrg",
  authDomain: "tabletrading2.firebaseapp.com",
  databaseURL: "https://tabletrading2-default-rtdb.firebaseio.com",
  projectId: "tabletrading2",
  storageBucket: "tabletrading2.firebasestorage.app",
  messagingSenderId: "74248821319",
  appId: "1:74248821319:web:b9ef7b27dbd5f2794f6f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
