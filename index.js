/**
 * Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari

 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if( i % 2 === 0) {

        let num = numbers[i];
        console.log(num);

        sum += num;
    }
}

console.log(sum);
console.log(`La somma dei numeri in posizione dispari è ${sum}.`);