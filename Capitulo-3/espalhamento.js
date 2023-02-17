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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
/* Ligando para 19 999332323
Ligando para 19 090932393 */

ligaParaCliente(...cliente.telefone) 

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)

/* {
  destinatario: 'João',
  rua: 'Rua Tal tal tal',
  bairro: 'Bairro Silva',
  numero: 233,
  apartamento: true,
  complemento: 'Ap 934'
} */