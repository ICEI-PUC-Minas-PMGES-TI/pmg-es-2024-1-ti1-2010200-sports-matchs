const apiUrl = 'http://localhost:3000/usuarios';

function cadastrarUsuario() {
  let novoUsuario = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('e-mail').value,
    dataNascimento: document.getElementById('data-nascimento').value,
    cpf: document.getElementById('cpf').value,
    senha: document.getElementById('senha').value,
    confirmarSenha: document.getElementById('confirmar-senha').value
  };

  console.table(novoUsuario);

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoUsuario),
  })
      .then(response => response.json())
      .then(data => {
        console.log('Sucesso ao inserir contato via API JSONServer:', data);
      })
      .catch(error => {
        console.error('Erro ao inserir contato via API JSONServer:', error);
      });
}

function logarUsuario() {
  let Usuario = {
    email: document.getElementById('e-mail').value,
    senha: document.getElementById('senha').value,
  };

  console.table(Usuario);

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Sucesso ao ler contatos via API JSONServer:', data);
        let usuarioEncontrado = data.find(
            usuario => usuario.email === Usuario.email &&
                usuario.senha === Usuario.senha);
        if (usuarioEncontrado) {
          console.log('Usuário logado com sucesso!');
        } else {
          console.error('E-mail ou senha incorretos!');
        }
      })
      .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
      });
}
