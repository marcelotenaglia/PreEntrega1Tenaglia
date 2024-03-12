import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY97VV6aE2OBXGfHMSeiheKhk7WKZSHTo",
  authDomain: "preentregatenaglia.firebaseapp.com",
  projectId: "preentregatenaglia",
  storageBucket: "preentregatenaglia.appspot.com",
  messagingSenderId: "303835151242",
  appId: "1:303835151242:web:8074775ac0f2dfe5f36673",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
