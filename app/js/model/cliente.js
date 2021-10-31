class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    toString() {
        return `
        Nome: ${this._nome}
        CPF: ${this._cpf}
        Número da Conta: ${this._conta.numero}
        Saldo: ${this._conta.saldo}`;
    }
}
