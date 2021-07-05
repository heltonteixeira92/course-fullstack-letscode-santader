// exemplo 1
let sinal = 'amarelo';

switch(sinal){
    case 'verde':
        console.log('pode passar');
        break;
    case 'amarelo':
        console.log('prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('sinal invalido');
}


// exemplo 2
//O comando new Date().getDay() retorna o dia atual como um inteiro, 
//começando em 0 no domingo e indo até 6 para o sábado

let hoje = new Date().getDate;
let dia;

switch (hoje){
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Segunda";
        break;
    case 2:
        dia = "Terça";
        break;
    case 3:
        dia = "Quarta";
        break;
    case 4:
        dia = "Quinta";
        break;
    case 5:
        dia = "Sexta";
        break;
    case 6:
        dia = "Sábado";
        break;
}
