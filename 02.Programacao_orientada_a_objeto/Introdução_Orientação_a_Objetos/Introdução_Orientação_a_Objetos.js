//O que a programação orientada a objetos nos permite fazer é criar novos tipos na linguagem. 
//Chamamos esses tipos de TAD (Tipos Abstratos de Dados).
const pessoa = {nome: 'lucas', idade: 26};

console.log(pessoa.nome);

const quadrado = {
    base:10,
    altura: 20,
    calculaArea: function(){return this.base*this.altura}
};

console.log(quadrado.calculaArea());


//Podemos inclusive criar objetos dentro de objetos ou mesmo vetores sem problemas:
const agenda = {
    contatos : [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}
    ],
    adicionar : function(contato){ this.contatos.push(contato) },
}

console.log(agenda.contatos)