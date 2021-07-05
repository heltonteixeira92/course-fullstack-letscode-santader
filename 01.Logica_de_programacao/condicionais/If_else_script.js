// ex 1
let estaSol = true;

if(estaSol){
    console.log('vou pra praia');
}

else{
    console.log('vou pro campo');
}

// ex 2

let numero = 0;

if(numero > 0){
    console.log('Número positivo')
}

else if(numero == 0){
    console.log('número é zero')
}
else{
    console.log('Número negativo')
}

// ex 3
// Operador Tenário
//Para atribuição condicional de valor o JavaScript possui um operador que permite 
//fazer uma if else inline, isto é, em uma única linha. Operador tenário é representado por ?:
let numero =3;
let paridade = numero % 2 == 0 ? 'par' : 'impar';
console.log(paridade);

