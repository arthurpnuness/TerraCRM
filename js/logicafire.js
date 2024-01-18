document.addEventListener('DOMContentLoaded', function () {
  const formulario1 = document.getElementById('formulario1');
  const formulario2 = document.getElementById('formulario2');
  const formulario3 = document.getElementById('formulario3');

  if (formulario1) {
    formulario1.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Formulário 1 submetido');
      const cadastrador = document.getElementById('cadastrador').value;
      const n_cliente = document.getElementById('n_cliente').value;
      const numero = document.getElementById('numero').value;
      const cpf = document.getElementById('cpf').value;
      const endereco = document.getElementById('endereco').value;
      const data_nasc = document.getElementById('data_nasc').value; 

      // Enviar dados para o Firebase
      console.log('Enviando dados para Firebase...');
      firebase.database().ref('/logicafire.js').push({ dados: 'exemplo' })
  .then(() => console.log('Dados enviados com sucesso'))
  .catch(error => console.error('Erro ao enviar dados:', error));

  if (formulario2) {
    formulario2.addEventListener('submit', function (e) {
      e.preventDefault();
      const cadastrador1 = document.getElementById('cadastrador1').value;
      const nome_cliente = document.getElementById('nome_cliente1').value;
      const descricao = document.getElementById('descricao').value;
      const interesse = document.getElementById('interesse').value;
      const negocio = document.getElementById('negocio').value;
      const contato = document.getElementById('contato').value;

      // Enviar dados para o Firebase
      firebase.database().ref('/logicafire.js').push({ dados: 'exemplo' })
  .then(() => console.log('Dados enviados com sucesso'))
  .catch(error => console.error('Erro ao enviar dados:', error));


  if (formulario3) {
    formulario3.addEventListener('submit', function (e) {
      e.preventDefault();
      const cadastrador2 = document.getElementById('cadastrador2').value;
      const n_cliente2 = document.getElementById('n_cliente2').value;
      const tipo = document.getElementById('tipo').value;
      const marca = document.getElementById('marca').value;
      const ano = document.getElementById('ano').value;
      const caract = document.getElementById('caract').value;
      const cidade = document.getElementById('cidade').value;
      const endereco = document.getElementById('endereco').value;
      const data_inc = document.getElementById('data_inc').value;

      // Enviar dados para o Firebase
      firebase.database().ref('/logicafire.js').push({ dados: 'exemplo' })
  .then(() => console.log('Dados enviados com sucesso'))
  .catch(error => console.error('Erro ao enviar dados:', error));

  }
})
