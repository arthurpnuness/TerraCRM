// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVFPdvYowYhUnftTVsyRsQHQTv6ngLpE",
  authDomain: "terra-agro.firebaseapp.com",
  projectId: "terra-agro",
  storageBucket: "terra-agro.appspot.com",
  messagingSenderId: "910586035847",
  appId: "1:910586035847:web:b88597689be35f19300222",
  measurementId: "G-0M4WP566V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);