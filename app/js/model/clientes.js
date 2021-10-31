class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf == cpf);
    }
    listar() {
        return this._clientes;
    }
}
