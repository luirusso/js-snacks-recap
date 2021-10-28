/**
 * JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while
 */

let total = 0;
console.log(userNum)

for (i = 1; i <= 5; i++) {

    let userNum = parseInt(prompt('Inserire un numero'));

    total += userNum;
    console.log(total)
}
