
//1. Wypisz do konsoli wartości od 1 do 100, zastępując każdą wartość parzystą słowem "Fiz", 
//a każdą podzielną przez trzy słowem "Buz" (lub słowem "FizBuz" jeśli jest podzielna zarówno przez 2 jak i przez 3). 
//Wartości wypisz w pojedynczym wierszu - pojedynczą instrukcją console.log (np. budując string).

let output = ''

for (let i = 1; i <= 100; i++) {

    if (i % 2 == 0 && i % 3 == 0) {
        output += 'FizBuz '
    } else if (i % 2 == 0) {
        output += 'Fiz '
    } else if (i % 3 == 0) {
        output += 'Buz '
    } else {
        output += `${i} `
    }
}
console.log(output)