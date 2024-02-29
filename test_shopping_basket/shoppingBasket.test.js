const ShoppingBasket = require("./shoppingBasket");

describe('ShoppingBasket', () => {
    it('returns 0, basket empty', () => {

        const basket = new ShoppingBasket();

        expect(basket.getTotalPrice()).toBe(0);
    });
    it('returns 4.99', () => {
        
        const fakeCandy = {
            getName:() => 'Mars',
            getPrice: () => 4.99
        }

        const basket = new ShoppingBasket();
        basket.addItem(fakeCandy)

        expect(basket.getTotalPrice()).toBe(4.99);
    });
})


// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97