import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCETe-VLT7ym0o9VSBhtB78VmDhYDXZbpw",
  authDomain: "scissors-altschool.firebaseapp.com",
  projectId: "scissors-altschool",
  storageBucket: "scissors-altschool.appspot.com",
  messagingSenderId: "1067376984018",
  appId: "1:1067376984018:web:44e4ac8e0458b93e24120b"
};

initializeApp(firebaseConfig);

const auth = getAuth()
// const db = getFirestore();

export { auth};
