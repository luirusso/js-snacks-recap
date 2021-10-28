/**
 * Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
 */

let number = parseInt(prompt('Inserire un numero'));
console.log(number);

if (isNaN(number)) {
    alert('Il valore inserito non è un numero. Per favore inserire un numero.')
} else if (number % 2 == 0) {
    console.log(`${number} è pari. Procedere alla stampa.`);
    console.log(number);
} else if (number % 2 != 0) {
    console.log(`${number} è dispari. Procedere alla stampa del numero successivo.`);
    console.log(`${number + 1}`)
}