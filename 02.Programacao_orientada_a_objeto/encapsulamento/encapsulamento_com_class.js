class Quadrado{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
    }
  }

const quadrado = new Quadrado(3, 4);

console.log(quadrado.getCor())