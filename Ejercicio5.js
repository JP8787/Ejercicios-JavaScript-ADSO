const prompt = require('prompt-sync')();

let km = prompt("¿Cuántos kilómetros recorriste?: ");
let litros = prompt("¿Cuántos litros de combustible consumiste?: ");

km = Number(km);
litros = Number(litros);

let consumo = litros / km;

console.log("Tu carro consumió " + consumo + " litros por kilómetro.");
