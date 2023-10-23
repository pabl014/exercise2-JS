//Wczytaj od użytkownika (np. wykorzystując funkcję prompt()) długość promienia koła. Oblicz jego obwód i pole powierzchni. 
//Wypisz je, zaokrąglając wartość do dwóch miejsc po przecinku (np. korzystając z funkcji alert()). 
//Jeśli podana wartość nie jest liczbą, poinformuj o tym odpowiednik komunikatem.

let radius = parseFloat(prompt('Podaj długość promienia koła:'))
while (true) {
    if (isNaN(radius)) {
        radius = parseFloat(prompt('Podana wartosc nie jest liczba!'))
    } else {
        let perimeter = 2 * Math.PI * radius
        let area = Math.PI * radius * radius
        alert(`Pole kola o promieniu ${radius} wynosi ${area.toFixed(2)}, a obwod ${perimeter.toFixed(2)}`)
        break
    }
}
