//primeiro caso de aplicação de função de alta ordem que vamos ver. Essa função é usada para transformar vetores. 
//Passamos uma função para o Map, e essa função é aplicada a cada item do vetor.

const vetor = ['10', '20' ,'30']; //string
const stringToInt = (x) => parseInt(x); // criamos funçaõ que vai pegar string e retornar inteiro usando o parseInt
const vetor2 = vetor.map(stringToInt);
console.log(vetor2); // aqui já sai como inteiro

const vetor3 = vetor2.map(x => x*x); //escrever a função diretamente dentro do map.
console.log(vetor3);