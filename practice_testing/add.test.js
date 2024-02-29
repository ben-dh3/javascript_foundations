const add = require('./add');
const multiply = require('./multiply');

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    });
    it('adds 5 and 6', () => {
        expect(add(5, 6)).toBe(11);
    });
});

describe('multiply', () => {
    it('multiplies two numbers together', () => {
        expect(multiply(5, 2)).toBe(10);
    });
});