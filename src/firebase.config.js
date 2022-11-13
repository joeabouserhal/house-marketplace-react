// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSzMO_jzKQx2-YTARq3ehygYVEFLd3II",
  authDomain: "house-marketplace-a845b.firebaseapp.com",
  projectId: "house-marketplace-a845b",
  storageBucket: "house-marketplace-a845b.appspot.com",
  messagingSenderId: "94696126567",
  appId: "1:94696126567:web:c40ce6ac34f41ece547cc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
