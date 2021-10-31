class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: number): void {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: number): Cliente {
        return this._clientes.find(
            cliente => cliente.cpf == cpf);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }
}