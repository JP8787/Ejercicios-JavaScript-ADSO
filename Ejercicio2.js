const prompt = require('prompt-sync')();

let lado = prompt("Escribe el lado del cuadrado: ");
lado = Number(lado);

let area = lado * lado;
let perimetro = lado * 4;

console.log("Área del cuadrado: " + area);
console.log("Perímetro del cuadrado: " + perimetro);
