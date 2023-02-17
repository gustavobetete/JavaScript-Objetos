const clientes = require("./clientes.json");

function filtarApartamentoSemComplemento(lista){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtarApartamentoSemComplemento(clientes)

console.log(filtrados)