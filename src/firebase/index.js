import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOt-rxmpuMUj5LU1hjrxNzMdPlViGmnc4",
  authDomain: "instaclone-49b4e.firebaseapp.com",
  databaseURL: "https://instaclone-49b4e-default-rtdb.firebaseio.com",
  projectId: "instaclone-49b4e",
  storageBucket: "instaclone-49b4e.appspot.com",
  messagingSenderId: "960043778968",
  appId: "1:960043778968:web:e7af804a1093e5eaf461ed",
  measurementId: "G-8LNV236TL8",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
