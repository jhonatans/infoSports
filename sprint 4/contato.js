const contacts = document.querySelector('.contacts');
console.log(contacts);

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault(); // Evita o envio do formulário e a recarga da página

  const nome = document.getElementById('nome').value;
  const sobreNome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  // Cria um novo elemento de contato
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  // Preenche o elemento de contato com as informações do formulário
  contactDiv.innerHTML = `
        <h3>Informações de Contato:</h3>
        <p>Nome: ${nome} ${sobreNome}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Mensagem: ${mensagem}</p>
    `;

  // Adiciona o elemento de contato à seção de contatos
  contacts.appendChild(contactDiv);

  // Limpa os campos de entrada após o clique
  form.reset();
});
