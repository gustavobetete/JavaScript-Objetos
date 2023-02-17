const cliente = {
    nome: 'João',
    idade: 32,
    email: 'joao@firma.com',
    telefone: ['19 999332323', '19 090932393'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
            console.log('Saldo insuficiente')
        }else {
            this.saldo -= valor;
            console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`)
        }
    }
};
cliente.efetuaPagamento(50) //Pagamento realizado! Novo saldo: 150



