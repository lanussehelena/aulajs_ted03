/*
•Crie um array com 5 nomes e exiba o terceiro nome no console.
•Adicione um nome ao final e um no início do array.
•Remova o último nome e exiba o array atualizado.
•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

*/

let lista = ["Pedro", "Júlio", "Ana", "Maria", "João"];

console.log(lista[2]);

lista.push("Ricardo");

lista.unshift("Laura");

lista.pop();

console.log(lista);

let listaNumeros = [2, 4, 6, 8];

let listaNumerosDobrados = listaNumeros.map(numeros => numeros * 2);

let listaNumeros2 = [1, 3, 5, 7, 9];

let listaNumerosMaioresCinco = listaNumeros2.filter(numero => numero > 5);