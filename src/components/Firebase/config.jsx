// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUNUJk5ZXIjDC8B3kd1ClA58BpAVnE_2Y",
    authDomain: "pczone-3244d.firebaseapp.com",
    projectId: "pczone-3244d",
    storageBucket: "pczone-3244d.appspot.com",
    messagingSenderId: "858928095635",
    appId: "1:858928095635:web:9afe9f919367ad03ad4866"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);