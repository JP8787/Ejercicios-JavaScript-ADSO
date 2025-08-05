const prompt = require('prompt-sync')();

let personas = prompt("¿Cuántas personas comerán torta de papa?: ");
personas = Number(personas);

let papaGramos = personas * 200;
let kilosPapa = papaGramos / 1000;

let huevos = kilosPapa * 5;
let cebolla = kilosPapa * 300;

console.log("Se necesitan:");
console.log(papaGramos + " gramos de papa");
console.log(huevos + " huevos");
console.log(cebolla + " gramos de cebolla");
