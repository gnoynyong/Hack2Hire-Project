import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {initializeApp} from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyCaHJD_LV7lsarQPR_5PlVLVlsmJNK2-Xk",
  authDomain: "instameeting-802d9.firebaseapp.com",
  projectId: "instameeting-802d9",
  storageBucket: "instameeting-802d9.appspot.com",
  messagingSenderId: "400251305999",
  appId: "1:400251305999:web:ff31fe17946c477ce9e37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();
export const provider = new  GoogleAuthProvider();