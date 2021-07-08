// funçoes é básicamente um conjunto de códigos que é executado quando chamado por um nome, 
// para tornalo mais reutilizável parametrizamos

function escreva(texto){
    console.log(texto);
}

escreva('meu nome é Helton');

//ex2:

function somar(a,b){
    return a+b
}
console.log(somar(5,5))
let resultado = somar(1,3)

//ex3
const somar1 = function(a,b){return a+b;}

console.log(somar1(10,20));

//ex4 - funçoes de flexa - é declarado os parâmetros de entrada em parêntesis e a sua definição seguido da flecha =>.
const somarflexa = (a,b) => a+b;
console.log(somar(50,50));