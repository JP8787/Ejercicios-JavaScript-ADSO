const prompt = require('prompt-sync')();

let precio = prompt("Ingresa el precio: ");

let iva = prompt("Ingresa el IVA: ");

let total = Number(precio) + (Number(precio) * Number(iva) / 100);
console.log("Total a pagar: " + total);
