//Existem estruturas onde precisamos restringir os tipos dos atributos 
//para que a estrutura funcione corretamente.
class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica"//not a number, forma de validar se é numero
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // paramentro opcional
    }
}

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'blue';
console.log(quadrado);