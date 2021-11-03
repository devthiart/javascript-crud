const URL = `http://localhost:3000/profile`;

const listaClientes = () => {
  return fetch(URL)
    .then((resposta) => {
      if(resposta.ok) {
        return resposta.json();
      }
      throw new Error('Não foi possível listar os clientes.');
    });
}

const criaCliente = (nome, email) => {
  return fetch(URL, {
    method: 'POST',
    headers: { 'Content-type' : 'application/json' },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then((resposta) => {
    if(resposta.ok){
      return resposta.body;
    }
    throw new Error('Não foi possível criar o cliente');
  });
}

const removeCliente = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  }).then((resposta) => {
    if(resposta.ok === false) {
      throw new Error('Não foi possível deletar o cliente');
    }
  });
}

const detalhaCliente = (id) => {
  return fetch(`${URL}/${id}`)
    .then((resposta) => {
      if(resposta.ok) {
        return resposta.json();
      }
      throw new Error('Não foi possível detalhar o cliente');
    });
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      nome: nome, 
      email: email
    })
  })
    .then((resposta) => {
      if(resposta.ok) {
        return resposta.json();
      }
      throw new Error('Não foi possível atualizar o cliente');
    });
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}