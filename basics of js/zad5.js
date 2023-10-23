const productsString = "jajka, mleko, masło, chleb, jogurt, ser, pomidory, marchew"

//Function to create a price list
function createPriceList(productsString) {
    const products = productsString.split(', ').map(name => {
        return {
            name: name,
            price: (Math.random() * (5 - 1) + 1).toFixed(2)
        };
    });

    return products
}

// Price list creation
const priceList = createPriceList(productsString)
console.log("cennik:")
console.table(priceList)


// Function to create a shopping list
function createShoppingList(priceList) {
    const shoppingList = []
    const productsAmount = priceList.slice(0, Math.ceil(priceList.length / 2))

    for (let product of productsAmount) {
        const rndIndex = Math.floor(Math.random() * priceList.length)
        const product = priceList[rndIndex]
        const amount = Math.floor(Math.random() * 10) + 1
        shoppingList.push({ name: product.name, price: product.price, amount: amount })
    }

    return shoppingList
}

// Tworzenie listy zakupów
const shoppingList = createShoppingList(priceList)
console.log("lista zakupow:")
console.table(shoppingList)

// Obliczanie całkowitej ceny
const total = shoppingList.reduce((sum, product) => sum + product.price * product.amount, 0).toFixed(2)
console.log(`Całkowita cena: ${total}`)