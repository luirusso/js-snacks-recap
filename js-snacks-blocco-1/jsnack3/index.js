/**
 * JSnack 4
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
 */

const numArray = [];

for (let i = 0; i < 6; i++) {

    const newNum = parseInt(prompt('Inserire un numero'));
    console.log(newNum);

    if ( isNaN(newNum) ) {
        alert('Per favore inserire un numero');
    } else if ( newNum % 2 == 0 ) {
        console.log(`${newNum} è pari`);
    } else {
        numArray.push(newNum);
        console.log(`${newNum} è dispari, procedere all'inserimento nell'array.`);
    }
}

console.log(numArray);