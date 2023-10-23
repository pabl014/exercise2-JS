// //Do każdego z poniższych podpunktów napisz osobną funkcję. Działanie zademonstruj wywołując je po kolei i wypisując zawartość tablicy po każdej operacji:

//Stwórz i wypełniaj tablicę losowymi wartościami z przedziału 1-10, do momentu gdy ich suma nie osiągnie 200.
// Znajdź wartość najmniejszą i usuń jej pierwsze wystąpienie.
// Znajdź wartość największą i usuń jej ostatnie wystąpienie.
// Wypisz do konsoli informację ile razy każda z wartości występuje w tablicy.
// Dziesięć pierwszych wartości (o indeksach 0-9) przenieś na koniec (nie zmieniając ich kolejności).

//Stwórz i wypełniaj tablicę losowymi wartościami z przedziału 1-10, do momentu gdy ich suma nie osiągnie 200.
const arr = []
const createArray = (arr) => {
    let sum = 0

    while (sum < 200) {
        let rnd = Math.floor(Math.random() * 10 + 1)
        arr.push(rnd)
        sum += rnd
    }
    console.log("Stworzona tablica: ", arr)
}
createArray(arr)

// Znajdź wartość najmniejszą i usuń jej pierwsze wystąpienie.

const removeFirstSmallest = (arr) => {
    let minValue = arr[0]
    let minIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
            minIndex = i
        }
    }
    arr.splice(minIndex, 1)
    console.log("Tablica po usunięciu pierwszej najmniejszej wartosci: ", arr)
}
removeFirstSmallest(arr)

// Znajdź wartość największą i usuń jej ostatnie wystąpienie.

const removeLastBiggest = (arr) => {
    let maxValue = arr[0]
    let maxIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxValue) {
            maxValue = arr[i]
            maxIndex = i
        }
    }
    //console.log(`Znaleziona wartosc ${maxValue}`)
    arr.splice(maxIndex, 1)
    console.log("Tablica po usunięciu ostatniej najwiekszej wartosci: ", arr)
}
removeLastBiggest(arr)

// Wypisz do konsoli informację ile razy każda z wartości występuje w tablicy.

const valueCounter = (arr) => {
    let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - 1]++
    }

    for (let i = 0; i < countArr.length; i++) {
        console.log(`Wartosc ${i + 1} wystapila w tablicy ${countArr[i]} razy`)
    }
}
valueCounter(arr)

// Dziesięć pierwszych wartości (o indeksach 0-9) przenieś na koniec (nie zmieniając ich kolejności).
const moveTenFirstElementsToEnd = (arr) => {
    let firstTenElements = arr.splice(0, 10) //remove 10 elements starting at index 0
    arr.splice(arr.length, 0, ...firstTenElements)
    console.log("Tablica po przeniesieniu pierwszych 10 wartości na koniec: ", arr)
}
moveTenFirstElementsToEnd(arr)