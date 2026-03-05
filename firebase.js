import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API",
  authDomain: "sdi-ficha-9d608.firebaseapp.com",
  projectId: "sdi-ficha-9d608",
  storageBucket: "sdi-ficha-9d608.firebasestorage.app",
  messagingSenderId: "1018042015659",
  appId: "1:1018042015659:web:0f0ec9e7981247ec61fcee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
