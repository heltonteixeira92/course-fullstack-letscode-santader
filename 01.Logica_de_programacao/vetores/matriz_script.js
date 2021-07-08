// Matriz é um vetor de vetores

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9,],
]

for(let linha of matriz){ //percorre as linhas da matriz
    for(let dado of linha){ //percorre os dados das linhas
        console.log(dado);
    }
}