
const names = ["Anna", "Kazimierz", "Kasia", "Marek", "Aleksandra"]

function codeNames(names) {
    for (let i = 0; i < names.length; i++) {
        let codedName = ""

        for (let j = 0; j < names[i].length; j++) {
            const letter = names[i][j]
            if (letter === "a" || letter === "A") {
                codedName += "4"
            } else if (letter === "e" || letter === "E") {
                codedName += "3"
            } else {
                codedName += letter
            }
        }

        names[i] = codedName
    }
}

codeNames(names)
console.log("zakodowane imiona: ")
console.log(names)

function changeNames(names) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 6) {
            const beginning = names[i].slice(0, 3)
            const end = names[i].slice(-3)
            const changedName = `${beginning}...${end}`
            names[i] = changedName
        }
    }
}

changeNames(names)
console.log("Zmienione imiona: ")
console.log(names)