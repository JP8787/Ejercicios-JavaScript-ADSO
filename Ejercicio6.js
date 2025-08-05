const prompt = require('prompt-sync')();

let horas = prompt("ingresa la cantidad de horas: ");
let minutos = prompt("ingresa la cantidad de minutos: ");

horas = Number(horas);
minutos = Number(minutos);

let total_segundos = (horas * 60 * 60) + (minutos * 60);

console.log("el tiempo total en segundos es: " + total_segundos);
