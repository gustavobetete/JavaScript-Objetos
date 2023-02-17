const cliente = {
    nome: 'Gustavo',
    idade: 23,
    cpf: '495.749.152-32',
    email: 'gustavobetete@cpexembrioes.com',
};

console.log(`O nome do cliente é ${cliente["nome"]} essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})

