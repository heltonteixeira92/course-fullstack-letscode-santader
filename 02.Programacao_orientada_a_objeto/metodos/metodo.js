// Métodos dão aos nossos objetos o poder de executar códigos, 
//o que chamamos de comportamento há algumas aulas

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica"//not a number, forma de validar se é numero
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // paramentro opcional
    }
    calculaArea(){ //metodo
        return this.base*this.altura;
    }
    duplicaBase(){//metodo
        this.base = 2*this.base
    }
    imprimir(){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
}

const quadrado = new Quadrado(11, 12);
quadrado.duplicaBase();
console.log(quadrado.calculaArea());