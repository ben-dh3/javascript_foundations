class Candy {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
}

class ShoppingBasket{
    constructor(){
        this.basket = {}
    }

    addItem(candy){
        this.basket[candy.getName()] = candy.getPrice()
    }
    getTotalPrice(){
        const sum = Object.values(this.basket).reduce((a,b) => a+b,0);
        return sum
    }
}

module.exports = Candy;
module.exports = ShoppingBasket;