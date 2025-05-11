import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCC16V4NEml8LG9u6jbQuUisx6HQfBIlgM",
  authDomain: "tabletrading-bbd90.firebaseapp.com",
  databaseURL: "https://tabletrading-bbd90-default-rtdb.firebaseio.com",
  projectId: "tabletrading-bbd90",
  storageBucket: "tabletrading-bbd90.firebasestorage.app",
  messagingSenderId: "968834440885",
  appId: "1:968834440885:web:c6add1279df27fe85968fc"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
