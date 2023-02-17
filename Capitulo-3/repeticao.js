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

for(let chave in cliente){
    let tipo = typeof cliente[chave];

    if (tipo != 'object' && tipo != 'function'){
        console.log(`A chave: ${chave} tem o valor: ${cliente[chave]}`);
    }
}

/* A chave: nome tem o valor: João
A chave: idade tem o valor: 32
A chave: email tem o valor: joao@firma.com */