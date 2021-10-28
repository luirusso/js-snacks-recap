/**
 * JSnack 2
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const word1 = prompt('Inserire prima parola')
const word2 = prompt('Inserire seconda parola')

if (word1 < word2) {
    console.log(word1, word2)
} else if (word1 > word2) {
    console.log(word2, word1)
} else {
    alert('Le due parole hanno la stessa lunghezza o hai lasciato il campo vuoto. Per favore, inserire delle parole.')
}