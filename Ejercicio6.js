const prompt = require('prompt-sync')();

let horas = prompt("Ingresa la cantidad de horas: ");
let minutos = prompt("Ingresa la cantidad de minutos: ");

horas = Number(horas);
minutos = Number(minutos);

let totalSegundos = (horas * 60 * 60) + (minutos * 60);

console.log("El tiempo total en segundos es: " + totalSegundos);
