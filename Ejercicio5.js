const prompt = require('prompt-sync')();

let km = prompt("¿cuatos kilometros recorriste?: ");
let litros = prompt("¿cuantos litros de combustible consumiste?: ");

km = Number(km);
litros = Number(litros);
let consumo = litros / km;
console.log("Tu carro consumió " + consumo + " litros por kilómetro.");
