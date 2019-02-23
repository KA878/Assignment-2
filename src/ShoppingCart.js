class ShoppingCart {
    constructor() {
        this.items = []
    }

getItems() {
    return this.items
}

addItem(itemName, quantity, price) {
    
    this.items.push({name: itemName, 
                     pricePerUnit: price,
                     quantity: quantity})
}

clear() {
    this.items = []
}
total() {
    this.items
    .map(x => (x.pricePerUnit * x.quantity))
    .reduce((previous, current) => {
    previous = previous + current
    return previous}
)
}

}

module.exports = ShoppingCart