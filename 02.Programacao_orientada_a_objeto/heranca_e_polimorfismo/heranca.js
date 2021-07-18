// JavaScript tem o conceito de herança como a maioria das linguagens de 
// programação orientadas a objetos. Que é criar uma nova classe que herda os atributoes
// e métodos de uma classe pai. A nova classe, por sua vez, é chamada de classe filha.

// A sintaxe para fazermos herança em JavaScript é a mesma utilizada em Java, ou seja, 
// a palavra extends denota a herança e a palavra super refere-se a super classe que foi herdada.


class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao('lucas', 26, '00000', '1111');
console.log(cidadao instanceof Pessoa);

//Polimorfismo

//Polimorfismo é uma conceito vindo do grego poli morfos, que significa "múltiplas formas".
//Ele se aplica na orientação a objetos no uso de Herança e na implementação de interfaces (que não é possível em JavaScript).
//Quando fazemos herança, nossa classe passa a ter vários tipos, assim como os objetos criados por ela.
//Os tipos são: O tipo da própria classe, denotado pelo mesmo nome da classe e o tipo de qualquer super classe que ela herde.