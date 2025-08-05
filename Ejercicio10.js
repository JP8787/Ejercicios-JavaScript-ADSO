const prompt = require('prompt-sync')();

let numero = prompt("escribe un número: ");
numero = Number(numero);

let es_par = numero % 2 === 0;

console.log(es_par);
