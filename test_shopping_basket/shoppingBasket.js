
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


module.exports = ShoppingBasket;