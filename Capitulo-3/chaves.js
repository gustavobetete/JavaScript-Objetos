const cliente = {
    nome: 'João',
    idade: 32,
    email: 'joao@firma.com',
    telefone: ['19 999332323', '19 090932393'],
};

cliente.enderecos = [ 
    {
        rua: 'Rua Tal tal tal',
        bairro: 'Bairro Silva',
        numero: 233,
        apartamento: true,
        complemento: 'Ap 934'
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto); // [ 'nome', 'idade', 'email', 'telefone', 'enderecos' ]

if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um endereço cadastrado")
}