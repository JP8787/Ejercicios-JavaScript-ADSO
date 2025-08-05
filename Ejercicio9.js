const prompt = require('prompt-sync')();

let a = prompt("escribe el valor de la primera variable (a): ");
let b = prompt("escribe el valor de la segunda variable (b): ");

let temp = a;
a = b;
b = temp;

console.log("ahora el valor de a es: " + a);
console.log("y el valor de b es: " + b);
