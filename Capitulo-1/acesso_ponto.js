const cliente = {
    nome: 'Gustavo',
    idade: 23,
    cpf: '495.749.152-32',
    email: 'gustavobetete@cpexembrioes.com',
};

console.log(`O nome do cliente é ${cliente.nome} essa pessoa tem ${cliente.idade}
 seu cpf é ${cliente.cpf} e seu email é ${cliente.email}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)