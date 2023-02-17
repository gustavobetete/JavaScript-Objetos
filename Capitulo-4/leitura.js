const dados = require("./cliente.json")

console.log(dados); // dados do cliente.json
console.log(typeof dados); // object

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString) //{"nome":"Joao","email":"joao@firma.com","telefone":["11223344","11922334453"],"endereco":{"rua":"R. Joseph Climber","numero":202,"apartamento":true,"complemento":"ap 934"}}
console.log(typeof clienteEmString) // string

console.log(clienteEmString.nome) // undefined

const clienteEmObjeto = JSON.parse(clienteEmString) // tranforma em objeto novamente

console.log(clienteEmObjeto)
/* {
  nome: 'Joao',
  email: 'joao@firma.com',
  telefone: [ '11223344', '11922334453' ],
  endereco: {
    rua: 'R. Joseph Climber',
    numero: 202,
    apartamento: true,
    complemento: 'ap 934'
  }
} */

