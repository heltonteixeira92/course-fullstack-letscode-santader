//Classes são a forma de definir as entidades no nosso sistema.
// Elas são estruturas capazes de dar origem a infinitos objetos de mesmo tipo. 

// É muito recomendado sempre iniciar nomes de classes com letra maiúscula
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

// Para criar um objeto do tipo Pessoa faremos:
const pessoa1 = new Pessoa('Helton', 28);
pessoa1.idade = 50;
console.log(pessoa1.nome);

// Sempre que precisar de uma nova Pessoa, basta criar outro objeto:
const pessoa2 = new Pessoa('Carlos', 35);
console.log(pessoa2.nome);