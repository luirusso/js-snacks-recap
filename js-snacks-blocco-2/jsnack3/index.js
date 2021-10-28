/**
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
 */


const names = ['Luigi', 'James', 'Michael'];
console.log(names)
const surnames = ['Russo', 'Bond', 'Jackson'];
console.log(surnames);

const fakeGuests = [];


for (let i = 0; i <= names.length - 1; i++) {
    const randomName = names[Math.floor(names.length * Math.random())]
    console.log(randomName);

    const randomSurname = surnames[Math.floor(surnames.length * Math.random())]
    console.log(randomSurname);

    fakeGuests.push(`${randomName} ${ randomSurname}`);
}

console.log(fakeGuests);
console.log(`La falsa lista degli invitati è: ${fakeGuests}`);