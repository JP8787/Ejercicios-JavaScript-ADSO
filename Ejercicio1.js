const prompt = require('prompt-sync')();

let precio = prompt("ingresa el precio: ");

let iva = prompt("ingresa el iva: ");

let total = Number(precio) + (Number(precio) * Number(iva) / 100);
console.log("total a pagar: " + total);
