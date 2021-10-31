class ClienteEspecial extends Cliente{

    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: number, conta: Conta) {
        super(nome,cpf,conta);
        this._dependentes = new Array<Cliente>();
    }

}