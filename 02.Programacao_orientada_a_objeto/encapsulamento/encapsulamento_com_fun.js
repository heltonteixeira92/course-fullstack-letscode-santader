function criaQuadrado(base, altura){

    let cor = 'blue'

    return{
        base,
        altura,
        getCor: function(){return cor;}
    };
}

const quadrado = criaQuadrado(3,4);
quadrado.cor = 'red'; // novamente isso só cria mais um campo dentro do meu objeto
console.log(quadrado.getCor()); // vai continuar retornando blue