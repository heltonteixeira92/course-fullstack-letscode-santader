// vetor é uma sequencia ordenada de valores, também chamada de array em inglês, 
//muito parecida com listas.

//ex 1
let vetor = [1,2,3,4,5,6,7,8];
console.log(vetor[2]); //imprime index 2, que é o valor 3
vetor[2] = 10; //modifica o index 2 para valor 10
console.log(vetor[2]);

//ex 2
let vetor2 = [];
for(let i =0; i < 10; i++){
    vetor2.push(i); // o push incrementa o valor de i no vetor
}
console.log(vetor2);

//ex 3
let vetor3 = [10,20,30,40,50]; // of percorre pelo valor, in percorre pelo index
for(let numero of vetor3){
    console.log(numero);
}