//O objetivo reduce é reduzir um vetor a um valor ou objeto. Por exemplo, 
//somar todos os elementos de um vetor é reduzir ele a um valor. O reduce é um pouco mais complexos 
//que o map e o filter por que deve ser passado um parâmetro a mais. 
//Vejamos o exemplo da soma:

//const vetor = [1,2,3,4,5,6,7];
//const soma = vetor.reduce((estado, item) => estado + item);
//console.log(soma);


//ex  Vamos fazer um exemplo com objetos

//Suponha que tenha um vetor de objetos aluno que possuem três atributos: nome, nota 1 e nota 2.

let vetor = [
    {nome : 'nome1', nota1 : 5, nota : 4},
    {nome : 'nome2', nota1 : 4, nota : 3},
    {nome : 'nome3', nota1 : 7, nota : 8},
    {nome : 'nome4', nota1 : 2, nota : 7},
    {nome : 'nome5', nota1 : 9, nota : 9},
];
// Vamos usar o reduce para somar todas a notas 1 e 2 dos alunos. 
//Para isso, declaramos primeiro o objeto a ser recebido como estado inicial:

const estadoInicial = {
    somaNota1 : 0,
    somaNota02 : 0,
    qtdNota1 : 0,
    qtdNota2 : 0,
};
//Em seguida passamos como parâmetro para o reduce:

const result = vetor.reduce((estado, valor)=> {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
}, estadoInicial);

//Note que podemos escrever em linhas separadas para facilitar a escrita e leitura. Esse reduce, 
//a cada rodada, cria um novo objeto que contém a somatória das notas do estado anterior com o valor
// das notas do item atual. Também contém um contador para cada nota para simplificar no cálculo de uma média posteriormente. Observe que o estado inicial foi passado por parâmetro depois da função no reduce. 
//Sem ele não teríamos de onde tirar os valores que estão no objeto.