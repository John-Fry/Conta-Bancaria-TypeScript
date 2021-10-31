//let contaController = new ContaController();
let clienteController = new ClienteController();

clienteController.listar();
//contaController.listar();

const c1 = new Clientes();
const c2 = new Conta('1', 100);
const c3 = new Clientes();
const c4 = new Conta('2', 300);
//const p1 = new Poupanca('1', 200);
//const cb1 = new ContaBonificada('3', 0);

c1.inserir(new Cliente('John', 2123124, c2));
c3.inserir(new Cliente('Pedro', 314261, c2));

console.log(c1.pesquisar(2123124));
console.log(c3.pesquisar(314261));

c1.remover(2123124);

let lista = c1.listar();

for(let i in lista) {
    console.log(lista[i]);
}

