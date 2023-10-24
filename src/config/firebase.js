import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADbIP0a5-JsuWwyVJBBWJCUJWCfQcuvRs",
  authDomain: "moneytrackr-aeaa6.firebaseapp.com",
  projectId: "moneytrackr-aeaa6",
  storageBucket: "moneytrackr-aeaa6.appspot.com",
  messagingSenderId: "781282600655",
  appId: "1:781282600655:web:c0af8778ab442e2a0939ba",
  measurementId: "G-RB6LTBJY7M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
