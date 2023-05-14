import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1MIzzt_4zC1c6anJfBYJnxcmG0Ny-Bhw",
    authDomain: "kyoto-games.firebaseapp.com",
    projectId: "kyoto-games",
    storageBucket: "kyoto-games.appspot.com",
    messagingSenderId: "777738771511",
    appId: "1:777738771511:web:c17944dcd39200455373b2",
    measurementId: "G-XCB1EBHC03"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)