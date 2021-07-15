//Encapsulamento é o conceito de negar o acesso aos atributos de uma classe diretamente, 
//seja para leitura ou escrita

function QUadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue'; // let não permite que a variavel seja acessada fora do escopo
}

const quadrado = new QUadrado(3,4);
quadrado.cor = 'red' //ele não acessou cor da função, e sim criou um novo atributo
console.log(quadrado.cor);