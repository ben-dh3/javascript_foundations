const Candy = require('./candy');

describe('candy', () => {
    it('returns mars', () => {

        const candy = new Candy('Mars', 4.99);

        expect(candy.getName()).toBe('Mars');
    });
    it('returns 4.99', () => {

        const candy = new Candy('Mars', 4.99);

        expect(candy.getPrice()).toBe(4.99);
    });
})


// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99