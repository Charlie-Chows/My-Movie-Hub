// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrhIQN7OIA8CJYgCERIgwcFNgjayu8bw",
  authDomain: "my-movie-hub.firebaseapp.com",
  projectId: "my-movie-hub",
  storageBucket: "my-movie-hub.appspot.com",
  messagingSenderId: "712616441042",
  appId: "1:712616441042:web:bfdd8eb8731667688f290b",
  measurementId: "G-MJSLKVZQEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);