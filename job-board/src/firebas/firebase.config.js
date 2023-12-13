// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdtZALnZgAHrBXMwPZP2QZPB1V64vdmqg",
  authDomain: "job-board-project-ed33b.firebaseapp.com",
  projectId: "job-board-project-ed33b",
  storageBucket: "job-board-project-ed33b.appspot.com",
  messagingSenderId: "287449412237",
  appId: "1:287449412237:web:ceaf48ae6aa1219a2de8c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;