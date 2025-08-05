const prompt = require('prompt-sync')();

let n1 = prompt("escribe el primer numero entero: ");
let n2 = prompt("escribe el segundo nmeuro entero: ");
let n3 = prompt("escribe el tercer numero entero: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

let media = (n1 + n2 + n3) / 3;

console.log("la media de los tres numeros es de: " + media);
