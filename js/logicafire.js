
import  firebase  from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

console.log('Iniciando Firebase...');
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

const db = firebase.initializeApp(firebaseConfig);

// Verificação do estado de autenticação
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('Usuário conectado:', user.uid);
  } else {
    console.log('Usuário desconectado.');
  }
});

function enviarForm1(){
  const cadastrador = document.getElementById('cadastrador')
  const n_cliente = document.getElementById('n_cliente')
  const numero = document.getElementById('numero')
  const cpf = document.getElementById('cpf')
  const endereco = document.getElementById('endereco')
  const data_nasc = document.getElementById('data_nasc')
  
    console.log('Formulário 1 submetido');
    if(cadastrador&&n_cliente&&numero&&cpf&&endereco&&data_nasc){
      const dados = {
        cadastrador: cadastrador.value,
        n_cliente:n_cliente.value,
        numero: numero.value,
        cpf:cpf.value,
        endereco:endereco.value,
        data_nasc:data_nasc.value
      }
      db.collection('formulario1').add(dados).then((docRef)=>{
        console.log('Doc add', docRef);
        cadastrador.value='';
        n_cliente.value='';
        numero.value='';
        cpf.value='';
        endereco.value='';
        data_nasc.value='';
      }).catch((error)=>{
        console.error('Erro add', error)
      })}
}

  if (formulario2) {
    formulario2.addEventListener('onclick', function (e) {
      e.preventDefault();
      console.log('Formulário 2 submetido');
      const cadastrador1 = document.getElementById('cadastrador1').value;
      const nome_cliente = document.getElementById('nome_cliente1').value;
      const descricao = document.getElementById('descricao').value;
      const interesse = document.getElementById('interesse').value;
      const negocio = document.getElementById('negocio').value;
      const contato = document.getElementById('contato').value;
    })}
  if (formulario3) {
    formulario3.addEventListener('onclick', function (e) {
      e.preventDefault();
      console.log('Formulário 3 submetido');
      const cadastrador2 = document.getElementById('cadastrador2').value;
      const n_cliente2 = document.getElementById('n_cliente2').value;
      const tipo = document.getElementById('tipo').value;
      const marca = document.getElementById('marca').value;
      const ano = document.getElementById('ano').value;
      const caract = document.getElementById('caract').value;
      const cidade = document.getElementById('cidade').value;
      const endereco = document.getElementById('endereco').value;
      const data_inc = document.getElementById('data_inc').value;
  })}

