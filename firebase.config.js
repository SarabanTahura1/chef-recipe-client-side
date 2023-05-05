import { initializeApp } from "firebase/app";

console.log(import.meta.env.VITE_APIKEY);
console.log(import.meta.env.VITE_AUTHDOMAIN);
console.log(import.meta.env.VITE_PROJECTID);
console.log(import.meta.env.VITE_STORAGEBUCKET);
console.log(import.meta.env.VITE_MESSAGINGSENDERID);
console.log(import.meta.env.VITE_APPID);

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: "AIzaSyCP3crehc3cmodSxOY7rFMzX8pAqKOaMdw",
  authDomain: "simplify-recipe.firebaseapp.com",
  projectId: "simplify-recipe",
  storageBucket: "simplify-recipe.appspot.com",
  messagingSenderId: "534702032043",
  appId: "1:534702032043:web:f914db47358bbc12b3e3ee",
};

export const app = initializeApp(firebaseConfig);
