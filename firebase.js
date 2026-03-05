// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbvROpZivulVavg0az08HQ75kMbNhB4Is",
  authDomain: "sdi-ficha-9d608.firebaseapp.com",
  projectId: "sdi-ficha-9d608",
  storageBucket: "sdi-ficha-9d608.firebasestorage.app",
  messagingSenderId: "1018042015659",
  appId: "1:1018042015659:web:0f0ec9e7981247ec61fcee",
  measurementId: "G-8KJ064YJEJ"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar serviços
const auth = firebase.auth();
const db = firebase.firestore();
