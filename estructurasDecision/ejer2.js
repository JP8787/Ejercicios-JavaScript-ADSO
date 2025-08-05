const prompt = require('prompt-sync')();

const numero = prompt("Ingresa un número: ");

if ((numero>=10 && numero<=99) || (numero>=-99 && numero<=-10)) {
    console.log(`Èl numero ${numero} tiene dos digitos.`);
}else{
    console.log(`Èl numero ${numero} no tiene dos digitos.`);
}