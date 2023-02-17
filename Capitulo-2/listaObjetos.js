const cliente = {
    nome: 'João',
    idade: 32,
    email: 'joao@firma.com',
    telefone: ['19 999332323', '19 090932393'],
};

cliente.enderecos = [ 
    {
        rua: 'Tal tal tal',
        bairro: 'Bairro Silva',
        numero: 233,
        apartamento: true,
        complemento: 'Ap 934'
    },
];

cliente.enderecos.push({
    rua: 'R. Joseph cleber',
    bairro: 'Bairro Peculiar',
    numero: 9090,
    apartamento: false
})

console.log(cliente.enderecos)

/* [
  {
    rua: 'Tal tal tal',
    bairro: 'Bairro Silva',
    numero: 233,
    apartamento: true,
    complemento: 'Ap 934'
  },
  {
    rua: 'R. Joseph cleber',
    bairro: 'Bairro Peculiar',
    numero: 9090,
    apartamento: false
  }
] */

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos) // listou apenas o endereco que tem o apartamento === true