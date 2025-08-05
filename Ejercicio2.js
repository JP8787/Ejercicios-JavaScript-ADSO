const prompt = require('prompt-sync')();

let lado = prompt("escribe el lado del cuadrado: ");
lado = Number(lado);

let area = lado * lado;
let perimetro = lado * 4;

console.log("area del cuadrado: " + area);
console.log("perimetro del cuadrado: " + perimetro);
