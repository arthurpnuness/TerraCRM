console.log('Iniciando Firebase...');
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyADVbHLFCeBiisgQap6GE53Q_8LmKMq91c",
  authDomain: "terra-crm93.firebaseapp.com",
  databaseURL: "https://terra-crm93-default-rtdb.firebaseio.com",
  projectId: "terra-crm93",
  storageBucket: "terra-crm93.appspot.com",
  messagingSenderId: "550321428380",
  appId: "1:550321428380:web:12ed780ce3c3ca145c1a59"
};

firebase.initializeApp(firebaseConfig);


// Verificação do estado de autenticação
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('Usuário conectado:', user.uid);
  } else {
    console.log('Usuário desconectado.');
  }
});