const cliente = {
    nome: 'João',
    idade: 32,
    email: 'joao@firma.com',
    telefone: ['19 999332323', '19 090932393'],
};

cliente.endereco = {
    rua: 'Tal tal tal',
    bairro: 'Bairro Silva',
    numero: 233,
    apartamento: true,
    complemento: 'Ap 934'
}

console.log(cliente)

/* {
  nome: 'João',
  idade: 32,
  email: 'joao@firma.com',
  telefone: [ '19 999332323', '19 090932393' ],
  endereco: {
    rua: 'Tal tal tal',
    bairro: 'Bairro Silva',
    numero: 233,
    apartamento: true,
    complemento: 'Ap 934'
  }
} */

console.log(cliente.endereco)

/* {
  rua: 'Tal tal tal',
  bairro: 'Bairro Silva',
  numero: 233,
  apartamento: true,
  complemento: 'Ap 934'
} */
